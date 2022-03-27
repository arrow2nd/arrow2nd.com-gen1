import Layout from 'components/common/layout'
import Sections from 'components/common/sections'
import SEO from 'components/common/seo'
import Title from 'components/common/title'

const Notfound = (): JSX.Element => (
  <Layout>
    <SEO title="404 Not Found" />
    <Title text="Opps!" />
    <Sections
      className="mt-12"
      contents={[
        {
          title: '404 Not Found',
          text: 'ページが見つかりませんでした 😿'
        }
      ]}
    />
  </Layout>
)

export default Notfound
