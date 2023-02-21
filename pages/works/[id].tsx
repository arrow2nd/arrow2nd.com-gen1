import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage
} from "next";
import { getPlaiceholder } from "plaiceholder";

import Notfound from "components/404";
import Works from "components/works";

import { Client } from "libs/client";
import { isDraft, toStringId } from "libs/util";

import type { WorkContent } from "types/cms/work";
import type { DynamicImage } from "types/image";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const WorksPage: NextPage<Props> = (props: Props) =>
  // コンテンツが無い場合は404ページを返す
  props.contents ? <Works {...props} /> : <Notfound />;

export default WorksPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await Client.getList<WorkContent>({ endpoint: "works" });
  const paths = data.contents.map((content) => `/works/${content.id}`);

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params, previewData } = context;

  // 作品ページID
  const id = params?.id && toStringId(params.id);
  if (!id) {
    throw new Error("[ Error ] ID not found");
  }

  // 下書き取得用のキー
  const draftKey = isDraft(previewData)
    ? { draftKey: previewData.draftKey }
    : {};

  // コンテンツを取得
  const contents = await Client.get<WorkContent>({
    endpoint: "works",
    contentId: id,
    queries: draftKey
  }).catch((err) => console.error(err));

  if (!contents) {
    return { props: { contents: null, plaiceholder: null } };
  }

  // 画像のプレースホルダを生成
  const images: DynamicImage[] = await Promise.all(
    contents.images.map(async ({ image, alt }) => {
      const { base64, img } = await getPlaiceholder(image.url);
      return { imageProps: { ...img, blurDataURL: base64 }, alt };
    })
  );

  return {
    props: {
      contents,
      images
    }
  };
};
