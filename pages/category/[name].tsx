import Category from 'components/category'
import { Client } from 'libs/client'
import { toStringId } from 'libs/util'
import type {
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticPropsContext
} from 'next'
import type { CategoryContent } from 'types/cms/category'
import type { WorkContent } from 'types/cms/work'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const CategoryPage: NextPage<Props> = (props: Props) => <Category {...props} />

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await Client.getList<CategoryContent>({ endpoint: 'category' })
  const paths = data.contents.map((content) => `/category/${content.name}`)

  return { paths, fallback: false }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context

  const currentCategory = params?.name && toStringId(params.name)
  if (!currentCategory) {
    throw new Error('[ Error ] category name not found')
  }

  const categories = await Client.getList<CategoryContent>({
    endpoint: 'category'
  })

  const data = await Client.getList<WorkContent>({
    endpoint: 'works',
    queries: {
      orders: 'publishedAt'
    }
  })
  const contents = data.contents.filter(
    (e) => e.category.name === currentCategory
  )

  return {
    props: {
      currentCategory,
      categories: categories.contents,
      contents
    }
  }
}
