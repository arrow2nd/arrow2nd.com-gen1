import { motion } from 'framer-motion'
import Link from 'next/link'

import { hoverLink } from 'animations/variants'

import { pageLinks } from 'data/pages'

type Props = {
  className: string
}

const Links = ({ className }: Props): JSX.Element => {
  const links = pageLinks.map(({ name, href }) => (
    <Link key={name} href={href} passHref>
      <motion.a className="block" {...hoverLink}>
        {name}
      </motion.a>
    </Link>
  ))

  return (
    <div className={`space-y-4 text-xl text-main tracking-0.2 ${className}`}>
      {links}
    </div>
  )
}

export default Links
