import Layout from 'components/common/layout'
import Sections from 'components/common/sections'
import SEO from 'components/common/seo'
import Title from 'components/common/title'

import type { SectionContent } from 'types/cms/section'

const Notfound = (): JSX.Element => {
  const contents: SectionContent[] = [
    {
      title: '404 Not Found',
      text: 'ページが見つかりませんでした 😿'
    }
  ]

  return (
    <Layout>
      <SEO title="404 Not Found" />
      <Title text="Opps!" />
      <Sections contents={contents} />
    </Layout>
  )
}

export default Notfound
