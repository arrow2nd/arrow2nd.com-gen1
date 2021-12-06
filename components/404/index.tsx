import Layout from 'components/common/layout'
import SEO from 'components/common/seo'
import Title from 'components/common/title'
import Section from 'components/common/section'

const Notfound = (): JSX.Element => (
  <Layout>
    <SEO title="404 Not Found" />
    <Title text="Opps!" />
    <div className="text-center">
      <Section title="404 Not Found" text="ページが見つかりませんでした 😿" />
    </div>
  </Layout>
)

export default Notfound
