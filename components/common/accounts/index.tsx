import { motion } from 'framer-motion'

import { hoverLink } from 'animations/variants'

import Icon from 'components/common/icon'

import { accountLinks } from 'data/accounts'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => {
  const icons = accountLinks.map(({ icon, href }) => (
    <motion.a
      key={icon}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...hoverLink}
    >
      <Icon name={icon} />
    </motion.a>
  ))

  return (
    <div className={`flex flex-row text-2xl space-x-4 ${className}`}>
      {icons}
    </div>
  )
}

export default Accounts
