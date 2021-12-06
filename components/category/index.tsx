import Layout from 'components/common/layout'
import SEO from 'components/common/seo'
import Title from 'components/common/title'
import Tab from 'components/category/tab'
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
    {contents.map((e) => (
      <div key={e.title}>
        <p>{e.title}</p>
        <p>{e.description}</p>
      </div>
    ))}
  </Layout>
)

export default Category
