import Image from 'next/image'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import type { DynamicImage } from 'types/image'

type Props = {
  images: DynamicImage[]
}

const Carousel = ({ images }: Props): JSX.Element => {
  const carouselImages = images.map(({ imageProps, alt }) => (
    <Image
      key={imageProps.src}
      {...imageProps}
      alt={alt}
      layout="responsive"
      placeholder="blur"
    />
  ))

  return (
    <RRCarousel
      className="md:mx-10 relative z-0 border-y md:border md:rounded-lg overflow-hidden"
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
