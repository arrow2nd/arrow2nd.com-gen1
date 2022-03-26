import { HTMLMotionProps, motion } from 'framer-motion'
import Link from 'next/link'

import { pageLinks } from 'data/pages'

type Props = {
  className: string
}

const Links = ({ className }: Props): JSX.Element => {
  const hoverAnim: HTMLMotionProps<'a'> = {
    whileHover: { scale: 1.2, fontWeight: 500 },
    whileTap: { scale: 0.9 },
    transition: { duration: 0.125, ease: 'easeOut' }
  }

  return (
    <div className={`space-y-3 text-xl text-main tracking-0.2 ${className}`}>
      {pageLinks.map(({ name, href }) => (
        <Link key={name} href={href} passHref>
          <motion.a className="block" {...hoverAnim}>
            {name}
          </motion.a>
        </Link>
      ))}
    </div>
  )
}

export default Links
