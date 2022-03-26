import { motion } from 'framer-motion'
import Link from 'next/link'

import { linkAnim } from 'animations/variants'

import { pageLinks } from 'data/pages'

type Props = {
  className: string
}

const Links = ({ className }: Props): JSX.Element => (
  <div className={`space-y-4 text-xl text-main tracking-0.2 ${className}`}>
    {pageLinks.map(({ name, href }) => (
      <Link key={name} href={href} passHref>
        <motion.a className="block" {...linkAnim}>
          {name}
        </motion.a>
      </Link>
    ))}
  </div>
)

export default Links
