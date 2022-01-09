import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp, hover } from 'animations/variants'

import type { DynamicImage } from 'types/image'

type Props = {
  id: string
  title: string
  description: string
  thumbnail: DynamicImage
}

const Card = ({ id, title, description, thumbnail }: Props): JSX.Element => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const href = `/works/${id}`
  const { imageProps, alt } = thumbnail

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <Link href={href} passHref>
        <a className="block overflow-hidden rounded-3xl shadow-md">
          <motion.div whileHover={hover}>
            <Image
              {...imageProps}
              className="rounded-3xl"
              alt={alt}
              layout="responsive"
              placeholder="blur"
            />
          </motion.div>
        </a>
      </Link>
      <Link href={href} passHref>
        <a className="block mt-4 ml-1 hover:text-arrow2nd transition-colors">
          <p>{title}</p>
          <p className="text-sm text-natural-gray">{description}</p>
        </a>
      </Link>
    </motion.div>
  )
}

export default Card
