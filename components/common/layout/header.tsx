import { motion } from 'framer-motion'
import Link from 'next/link'
import { RiHome5Line } from 'react-icons/ri'

import { linkAnim } from 'animations/variants'

import { pageLinks } from 'data/pages'

const Header = (): JSX.Element => (
  <div className="px-10 py-12 flex flex-row w-full items-center text-main">
    <Link href="/" passHref>
      <motion.a className="inline-block text-2xl" {...linkAnim}>
        <RiHome5Line />
      </motion.a>
    </Link>

    <div className="ml-auto space-x-6 text-lg">
      {pageLinks.map(({ href, name }) => (
        <Link key={name} href={href} passHref>
          <motion.a className="inline-block tracking-widest" {...linkAnim}>
            {name}
          </motion.a>
        </Link>
      ))}
    </div>
  </div>
)

export default Header
