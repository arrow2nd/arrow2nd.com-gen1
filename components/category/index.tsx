import Layout from 'components/common/layout'
import SEO from 'components/common/seo'
import Title from 'components/common/title'
import Tab from 'components/category/tab'
import Card from 'components/category/card'
import type { CategoryContent } from 'types/cms/category'
import type { WorkContent } from 'types/cms/work'

type Props = {
  currentCategory: string
  categories: CategoryContent[]
  contents: WorkContent[]
}

const Category = ({
  currentCategory,
  categories,
  contents
}: Props): JSX.Element => (
  <Layout>
    <SEO title={currentCategory} />
    <Title text="works" />
    <Tab current={currentCategory} categories={categories} />
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-16 transition-anim">
      {contents.map(({ id, title, description, images }) => (
        <Card
          key={id}
          id={id}
          title={title}
          description={description}
          imageContent={images[0]}
        />
      ))}
    </div>
  </Layout>
)

export default Category
