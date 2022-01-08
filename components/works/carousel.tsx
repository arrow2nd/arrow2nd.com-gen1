import Image from 'next/image'
import RSCarousel from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import type { ImageContent } from 'types/cms/work'

type Props = {
  images: ImageContent[]
}

const Carousel = ({ images }: Props): JSX.Element => {
  const carouselImages = images.map(({ image, alt }, idx) => (
    <div key={image.url}>
      <Image
        src={image.url}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={!idx ? 'eager' : 'lazy'}
      />
    </div>
  ))

  return (
    <RSCarousel
      className="mx-auto border border-gray-200 leading-none"
      autoplay
      infinite
      speed={600}
      arrows={false}
      dots
      appendDots={(dots) => (
        <div className="">
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      )}
    >
      {carouselImages}
    </RSCarousel>
  )
}

export default Carousel
