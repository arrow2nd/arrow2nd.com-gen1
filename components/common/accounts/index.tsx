import { motion } from 'framer-motion'

import { linkAnim } from 'animations/variants'

import Icon from 'components/common/icon'

import { accountLinks } from 'data/accounts'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => (
  <div className={`flex flex-row text-2xl space-x-4 ${className}`}>
    {accountLinks.map(({ icon, href }) => (
      <motion.a
        key={icon}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...linkAnim}
      >
        <Icon name={icon} />
      </motion.a>
    ))}
  </div>
)

export default Accounts
