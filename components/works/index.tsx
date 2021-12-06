import Layout from 'components/common/layout'
import SEO from 'components/common/seo'
import Section from 'components/common/section'
import Title from 'components/works/title'
import Carousel from 'components/works/carousel'
import LinkButton from 'components/works/link-button'
import type { WorkContent } from 'types/cms/work'

type Props = {
  contents: WorkContent
}

const Works = ({ contents }: Props): JSX.Element => {
  const { images, title, description, sections, links } = contents

  return (
    <Layout>
      <SEO title={title} desc={description} image={images[0].image.url} />
      <div className="mx-auto max-w-3xl transition-anim">
        <Carousel images={images} />
        <Title text={title} description={description} />
        <div className="text-center">
          {sections.map((item) => (
            <Section key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-16 text-center">
          {links.map((link) => (
            <LinkButton key={link.text} {...link} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Works
