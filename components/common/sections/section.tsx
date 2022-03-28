import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from 'animations/variants'

type Props = {
  className?: string
  title: string
  children: React.ReactNode
}

const Section = ({ className = '', title, children }: Props): JSX.Element => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  return (
    <motion.div
      className={`text-main tracking-wide ${className}`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <h3 className="block text-2xl">{title}</h3>
      {children}
    </motion.div>
  )
}

export default Section
