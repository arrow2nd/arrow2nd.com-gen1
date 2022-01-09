import Image from 'next/image'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import type { ImageContent } from 'types/cms/work'

type Props = {
  images: ImageContent[]
}

const Carousel = ({ images }: Props): JSX.Element => {
  const carouselImages = images.map(({ image, alt }, idx) => (
    <Image
      key={image.url}
      src={image.url}
      alt={alt}
      width={image.width}
      height={image.height}
      loading={!idx ? 'eager' : 'lazy'}
    />
  ))

  return (
    <RRCarousel
      className="mx-auto border border-gray-200"
      autoPlay
      interval={6000}
      transitionTime={600}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      {carouselImages}
    </RRCarousel>
  )
}

export default Carousel
