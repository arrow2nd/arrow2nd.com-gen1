import Card from 'components/category/card'
import Tab from 'components/category/tab'
import Layout from 'components/common/layout'
import SEO from 'components/common/seo'
import Title from 'components/common/title'

import type { CategoryContent } from 'types/cms/category'
import type { WorkContent } from 'types/cms/work'
import type { DynamicImage } from 'types/image'

type Props = {
  currentCategory: string
  categories: CategoryContent[]
  contents: WorkContent[]
  thumbnails: DynamicImage[]
}

const Category = ({
  currentCategory,
  categories,
  contents,
  thumbnails
}: Props): JSX.Element => {
  const cards = contents.map(({ id, title, description }, idx) => (
    <Card
      key={id}
      id={id}
      title={title}
      description={description}
      thumbnail={thumbnails[idx]}
    />
  ))

  return (
    <Layout>
      <SEO title={currentCategory} />
      <Title text="works" />
      <div className="animate-fadeIn">
        <Tab current={currentCategory} categories={categories} />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-16">
          {cards}
        </div>
      </div>
    </Layout>
  )
}

export default Category
