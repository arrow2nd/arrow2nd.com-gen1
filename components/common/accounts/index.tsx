import { motion } from 'framer-motion'
import Link from 'next/link'

import { hoverLink } from 'animations/variants'

import Icon from 'components/common/icon'

import { accountLinks } from 'data/accounts'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => {
  const icons = accountLinks.map(({ icon, href }) => (
    <motion.span key={icon} {...hoverLink}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon name={icon} />
      </Link>
    </motion.span>
  ))

  return (
    <div className={`flex flex-row text-2xl space-x-4 ${className}`}>
      {icons}
    </div>
  )
}

export default Accounts
