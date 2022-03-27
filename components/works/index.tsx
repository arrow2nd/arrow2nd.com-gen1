import Layout from 'components/common/layout'
import Sections from 'components/common/sections'
import SEO from 'components/common/seo'

import type { WorkContent } from 'types/cms/work'
import type { DynamicImage } from 'types/image'

import Carousel from './carousel'
import LinkSection from './link-section'
import Title from './title'

type Props = {
  contents: WorkContent
  images: DynamicImage[]
}

const Works = ({ contents, images }: Props): JSX.Element => {
  const { title, description, sections, links } = contents
  const imageUrl = contents.images[0].image.url

  return (
    <Layout>
      <SEO title={title} desc={description} imageUrl={imageUrl} />

      <div className="mx-auto max-w-3xl">
        <Carousel images={images} />
        <Title text={title} description={description} />
        <Sections className="mt-10" contents={sections} />
        <LinkSection items={links} />
      </div>
    </Layout>
  )
}

export default Works
