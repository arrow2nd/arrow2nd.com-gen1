import { motion, useAnimation } from 'framer-motion'
import Image from 'next/future/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp, hoverCard } from 'animations/variants'

import type { DynamicImage } from 'types/image'

type Props = {
  id: string
  title: string
  description: string
  thumbnail: DynamicImage
  dataTestId?: string
}

const Card = ({
  id,
  title,
  description,
  thumbnail,
  dataTestId
}: Props): JSX.Element => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const { imageProps, alt } = thumbnail

  return (
    <Link href={`/works/${id}`} scroll={false} passHref>
      <motion.a
        className="block"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        data-testid={dataTestId}
      >
        <motion.div {...hoverCard}>
          <div className="text-main border-2 rounded-xl overflow-hidden">
            <Image {...imageProps} alt={alt} placeholder="blur" />
          </div>
          <div className="mt-4 ml-1">
            <p>{title}</p>
            <p className="text-sm font-normal">{description}</p>
          </div>
        </motion.div>
      </motion.a>
    </Link>
  )
}

export default Card
