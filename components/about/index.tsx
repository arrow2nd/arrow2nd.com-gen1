import Arrow2nd from 'components/common/arrow2nd'
import Layout from 'components/common/layout'
import Section from 'components/common/section'
import SEO from 'components/common/seo'
import Title from 'components/common/title'
import { Content } from 'types/cms/about'

type Props = {
  contents: Content[]
}

const About = ({ contents }: Props): JSX.Element => (
  <Layout>
    <SEO title="about" article />
    <Title text="about" />
    <div className="transition-anim">
      <div className="flex mt-16 justify-center">
        <Arrow2nd />
      </div>
      <div className="text-center">
        {contents.map((item) => (
          <Section key={item.title} {...item} />
        ))}
      </div>
    </div>
  </Layout>
)

export default About
