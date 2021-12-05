import Arrow2nd from 'components/common/arrow2nd'
import Layout from 'components/common/layout'
import Section from 'components/common/section'
import SEO from 'components/common/seo'
import Title from 'components/common/title'

const About = (): JSX.Element => (
  <Layout>
    <SEO title="about" article />
    <Title text="about" />
    <div className="transition-anim">
      <div className="flex mt-16 justify-center">
        <Arrow2nd />
      </div>
      <div className="text-center">
        <Section title="タイトル" text="テキストをここに" />
      </div>
    </div>
  </Layout>
)

export default About
