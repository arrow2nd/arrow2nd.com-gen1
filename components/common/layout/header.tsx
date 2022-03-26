import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

import { linkAnim } from 'animations/variants'

import { pageLinks } from 'data/pages'

const Header = (): JSX.Element => {
  const links = pageLinks.map(({ href, name }) => (
    <Link key={name} href={href} passHref>
      <motion.a className="inline-block tracking-widest" {...linkAnim}>
        {name}
      </motion.a>
    </Link>
  ))

  return (
    <div className="p-8 flex flex-row w-full items-center text-main">
      <Link href="/" passHref>
        <motion.a className="inline-block text-2xl" {...linkAnim}>
          <FiHome />
        </motion.a>
      </Link>
      <div className="ml-auto space-x-6">{links}</div>
    </div>
  )
}

export default Header
