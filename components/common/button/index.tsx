import { motion } from 'framer-motion'
import Link from 'next/link'

import { hoverLink } from 'animations/variants'

type Props = {
  className?: string
  href: string
  children: React.ReactNode
  fill?: boolean
}

const Button = ({
  className = '',
  href,
  children,
  fill = false
}: Props): JSX.Element => (
  <Link href={href} passHref>
    <motion.a
      className={`flex-none mt-2 mr-2 md:mr-4 px-6 py-1 ${
        fill ? 'text-white bg-main' : 'text-main border-2 border-main'
      } rounded-xl tracking-widest ${className}`}
      {...hoverLink}
    >
      {children}
    </motion.a>
  </Link>
)

export default Button
