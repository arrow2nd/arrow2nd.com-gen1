import Notfound from 'components/404'
import Works from 'components/works'
import { Client } from 'libs/client'
import { isDraft, toStringId } from 'libs/util'
import type {
  NextPage,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import type { WorkContent } from 'types/cms/work'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const WorksPage: NextPage<Props> = ({ contents }: Props) => {
  // コンテンツが無い場合404を返す
  if (!contents) {
    return <Notfound />
  }

  return <Works contents={contents} />
}

export default WorksPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await Client.getList<WorkContent>({ endpoint: 'works' })
  const paths = data.contents.map((content) => `/works/${content.id}`)

  return { paths, fallback: 'blocking' }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params, previewData } = context

  // 作品ページID
  const id = params?.id && toStringId(params.id)
  if (!id) {
    throw new Error('[ Error ] ID not found')
  }

  // 下書き取得用のキー
  const draftKey = isDraft(previewData)
    ? { draftKey: previewData.draftKey }
    : {}

  const contents = await Client.get<WorkContent>({
    endpoint: 'works',
    contentId: id,
    queries: draftKey
  }).catch((err) => console.error(err))

  if (!contents) {
    return { notFound: true }
  }

  return {
    props: {
      contents
    }
  }
}
