import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from 'animations/variants'

import FaIcon from 'components/common/fa-icon'

import type { LinkContent } from 'types/cms/work'

const LinkButton = ({ icon, text, href }: LinkContent): JSX.Element => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  return (
    <motion.a
      className={`inline-block m-2 px-6 py-1.5 w-52 md:w-auto text-sm md:text-base text-natural-white bg-natural-gray hover:bg-black rounded-full shadow-md transition-colors`}
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      animate={controls}
      variants={fadeInUp}
    >
      <FaIcon name={icon[0]} />
      <span className="inline-block ml-1.5">{text}</span>
    </motion.a>
  )
}

export default LinkButton
