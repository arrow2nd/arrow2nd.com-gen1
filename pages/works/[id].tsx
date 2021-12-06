import Works from 'components/works'
import { Client } from 'libs/client'
import type {
  NextPage,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from 'next'
import type { WorkContent } from 'types/cms/work'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const WorksPage: NextPage<Props> = (props: Props) => <Works {...props} />

export default WorksPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await Client.getList<WorkContent>({ endpoint: 'works' })
  const paths = data.contents.map((content) => `/works/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context
  const id = typeof params?.id === 'string' ? params?.id : ''

  const contents = await Client.get<WorkContent>({
    endpoint: 'works',
    contentId: id
  })

  return {
    props: {
      contents
    }
  }
}
