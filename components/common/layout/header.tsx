import { motion } from 'framer-motion'
import Link from 'next/link'
import { RiArrowLeftSLine, RiHome5Line } from 'react-icons/ri'

import { hoverLink } from 'animations/variants'

import { pageLinks } from 'data/pages'

type Props = {
  backPagePath: string
}

const Header = ({ backPagePath }: Props): JSX.Element => {
  const links = pageLinks.map(({ href, name }) => (
    <Link key={name} href={href} scroll={false} passHref>
      <motion.a className="inline-block tracking-widest" {...hoverLink}>
        {name}
      </motion.a>
    </Link>
  ))

  return (
    <div className="px-10 py-12 flex flex-row w-full items-center text-main">
      <Link href={backPagePath || '/'} scroll={false} passHref>
        <motion.a className="inline-block text-2xl" {...hoverLink}>
          {backPagePath === '' ? <RiHome5Line /> : <RiArrowLeftSLine />}
        </motion.a>
      </Link>
      <div className="ml-auto space-x-6 text-lg">{links}</div>
    </div>
  )
}

export default Header
