import { motion } from 'framer-motion'
import Link from 'next/link'

import { hoverButton } from 'animations/variants'

type Props = {
  className?: string
  href: string
  children: React.ReactNode
  fill?: boolean
  targetBlank?: boolean
}

const Button = ({
  className = '',
  href,
  children,
  fill = false,
  targetBlank = false
}: Props): JSX.Element => (
  <Link href={href} scroll={false} passHref>
    <motion.a
      className={`flex-none mt-2 mr-2 md:mr-4 px-6 py-1 ${
        fill ? 'text-white bg-main' : 'text-main border-2 border-main'
      } rounded-xl tracking-widest ${className}`}
      target={targetBlank ? '_blank' : undefined}
      rel={targetBlank ? 'noopener noreferrer' : undefined}
      {...hoverButton}
    >
      {children}
    </motion.a>
  </Link>
)

export default Button
