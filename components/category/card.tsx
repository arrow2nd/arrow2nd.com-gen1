import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from 'animations/variants'

import type { ImageContent } from 'types/cms/work'

type Props = {
  id: string
  title: string
  description: string
  imageContent: ImageContent
}

const Card = ({ id, title, description, imageContent }: Props): JSX.Element => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const href = `/works/${id}`
  const { image, alt } = imageContent

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <Link href={href} passHref scroll={false}>
        <a className="block border border-gray-200 z-0 rounded-3xl shadow-md">
          <Image
            className="rounded-3xl hover:brightness-75 transition-all"
            src={image.url}
            alt={alt}
            width={image.width}
            height={image.height}
            layout="responsive"
            loading="eager"
          />
        </a>
      </Link>
      <div className="mt-4 ml-1">
        <Link href={href} passHref scroll={false}>
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
