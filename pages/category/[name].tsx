import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage
} from 'next'
import { getPlaiceholder } from 'plaiceholder'

import Category from 'components/category'

import { Client } from 'libs/client'
import { toStringId } from 'libs/util'

import type { CategoryContent } from 'types/cms/category'
import type { WorkContent } from 'types/cms/work'
import { DynamicImage } from 'types/image'

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

  // カテゴリIDを取得
  const categoryId = categories.contents.find(
    (e) => e.name === currentCategory
  )?.id

  if (!categoryId) {
    throw new Error('[ Error ] category id not found')
  }

  // カテゴリ毎の作品を公開日降順で取得
  const works = await Client.getList<WorkContent>({
    endpoint: 'works',
    queries: {
      filters: `category[equals]${categoryId}`,
      orders: '-publishedAt',
      limit: 50
    }
  })

  // サムネイル画像のプレースホルダを生成
  const thumbnails: DynamicImage[] = await Promise.all(
    works.contents.map(async (e) => {
      const { image, alt } = e.images[0]
      const { base64, img } = await getPlaiceholder(image.url)
      return { imageProps: { ...img, blurDataURL: base64 }, alt }
    })
  )

  return {
    props: {
      currentCategory,
      categories: categories.contents,
      contents: works.contents,
      thumbnails
    }
  }
}
