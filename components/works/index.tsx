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
  const { category, title, description, sections, links } = contents

  return (
    <Layout backPagePath={`/category/${category.name}`} disablePaddingX>
      <SEO
        title={title}
        desc={description}
        imageUrl={contents.images[0].image.url}
        article
      />
      <Carousel images={images} />
      <div className="px-10">
        <Title text={title} description={description} />
        <Sections className="mt-10" contents={sections} />
        {links.length > 0 && <LinkSection items={links} />}
      </div>
    </Layout>
  )
}

export default Works
