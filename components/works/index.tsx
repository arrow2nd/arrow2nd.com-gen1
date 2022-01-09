import Layout from 'components/common/layout'
import Sections from 'components/common/sections'
import SEO from 'components/common/seo'
import Carousel from 'components/works/carousel'
import LinkButton from 'components/works/link-button'
import Title from 'components/works/title'

import type { WorkContent } from 'types/cms/work'
import type { DynamicImage } from 'types/image'

type Props = {
  contents: WorkContent
  images: DynamicImage[]
}

const Works = ({ contents, images }: Props): JSX.Element => {
  const { title, description, sections, links } = contents
  const imageUrl = contents.images[0].image.url

  const linkButtons = links.map((link) => (
    <LinkButton key={link.text} {...link} />
  ))

  return (
    <Layout>
      <SEO title={title} desc={description} imageUrl={imageUrl} />
      <div className="mx-auto max-w-3xl animate-fadeIn">
        <Carousel images={images} />
        <Title text={title} description={description} />
        <Sections contents={sections} />
        <div className="mt-16 text-center">{linkButtons}</div>
      </div>
    </Layout>
  )
}

export default Works
