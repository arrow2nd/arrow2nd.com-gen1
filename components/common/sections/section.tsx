import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from 'animations/variants'

type Props = {
  title: string
  text: string
}

const Section = ({ title, text }: Props): JSX.Element => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden')
  }, [controls, inView])

  const commonAnim = {
    initial: 'hidden',
    animate: controls,
    variants: fadeInUp
  }

  const lines = text.split('\n').map((line) => <p key={line}>{line}</p>)

  return (
    <motion.div className="text-main tracking-wide " ref={ref} {...commonAnim}>
      <h3 className="block text-2xl">{title}</h3>
      <div className="mt-2 text-sm md:text-base font-normal">{lines}</div>
    </motion.div>
  )
}

export default Section
