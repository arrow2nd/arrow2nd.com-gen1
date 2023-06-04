import { getPlaiceholder } from "plaiceholder";

import Category, { CategoryProps } from "components/category";

import { Client } from "libs/client";
import { toStringId } from "libs/util";

import { CategoryContent } from "types/cms/category";
import { WorkContent } from "types/cms/work";
import { DynamicImage } from "types/image";

type Props = {
  params: { name: string };
};

export async function generateStaticParams(): Promise<{ name: string }[]> {
  const data = await Client.getList<CategoryContent>({ endpoint: "category" });
  const params = data.contents.map(({ name }) => ({ name }));
  return params;
}

async function fetchCategory(params: { name: string }): Promise<CategoryProps> {
  // 指定されたカテゴリを取得
  const currentCategory = params?.name && toStringId(params.name);
  if (!currentCategory) {
    throw new Error("[ Error ] category name not found");
  }

  // カテゴリリストを取得
  const categories = await Client.getList<CategoryContent>({
    endpoint: "category"
  });

  // 作品のカテゴリIDを取得
  const categoryId = categories.contents.find(
    (e) => e.name === currentCategory
  )?.id;

  if (!categoryId) {
    throw new Error("[ Error ] category id not found");
  }

  // カテゴリIDに該当する作品を公開日降順で取得
  const works = await Client.getList<WorkContent>({
    endpoint: "works",
    queries: {
      filters: `category[equals]${categoryId}`,
      orders: "-publishedAt",
      limit: 50
    }
  });

  // サムネイル画像のプレースホルダを生成
  const thumbnails: DynamicImage[] = await Promise.all(
    works.contents.map(async (e) => {
      const { image, alt } = e.images[0];
      const { base64, img } = await getPlaiceholder(image.url);
      return { imageProps: { ...img, blurDataURL: base64 }, alt };
    })
  );

  return {
    currentCategory,
    categories: categories.contents,
    contents: works.contents,
    thumbnails
  };
}

export default async function CategoryPage({
  params
}: Props): Promise<JSX.Element> {
  const category = await fetchCategory(params);
  return <Category {...category} />;
}
