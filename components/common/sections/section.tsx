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
    <div className="px-4 mt-16 tracking-wide" ref={ref}>
      <motion.h3 className="block text-xl text-natural-black" {...commonAnim}>
        {title}
      </motion.h3>
      <motion.div
        className="mt-4 text-sm md:text-base text-natural-gray"
        {...commonAnim}
      >
        {lines}
      </motion.div>
    </div>
  )
}

export default Section
