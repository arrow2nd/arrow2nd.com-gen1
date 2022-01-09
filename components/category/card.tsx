import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from 'animations/variants'

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
        <a className="block border border-gray-100 z-0 rounded-3xl shadow-md hover:brightness-75 transition-all">
          <Image
            {...imageProps}
            className="rounded-3xl"
            alt={alt}
            layout="responsive"
            placeholder="blur"
          />
        </a>
      </Link>
      <div className="mt-4 ml-1">
        <Link href={href} passHref>
          <a className="inline-block hover:text-arrow2nd transition-colors">
            {title}
          </a>
        </Link>
        <p className="block text-sm text-natural-gray">{description}</p>
      </div>
    </motion.div>
  )
}

export default Card
