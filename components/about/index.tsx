import Arrow2nd from 'components/common/arrow2nd'
import Layout from 'components/common/layout'
import Section from 'components/common/section'
import SEO from 'components/common/seo'
import Title from 'components/common/title'
import type { SectionContent } from 'types/cms/section'

type Props = {
  contents: SectionContent[]
}

const About = ({ contents }: Props): JSX.Element => {
  const sections = contents.map((item) => (
    <Section key={item.title} {...item} />
  ))

  return (
    <Layout>
      <SEO title="about" />
      <Title text="about" />
      <div className="transition-anim">
        <div className="flex mt-16 justify-center">
          <Arrow2nd />
        </div>
        <div className="text-center">{sections}</div>
      </div>
    </Layout>
  )
}

export default About
