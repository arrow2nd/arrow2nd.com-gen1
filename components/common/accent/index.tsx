import { motion } from 'framer-motion'

type Props = {
  className?: string
}

const Accent = ({ className = '' }: Props): JSX.Element => (
  <motion.div
    className={`w-2 h-1 mx-auto block bg-arrow2nd rounded-full ${className}`}
    animate={{ width: '4rem' }}
    transition={{ ease: 'easeInOut' }}
  />
)

export default Accent
