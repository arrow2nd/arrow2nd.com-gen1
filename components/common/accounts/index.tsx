import FaIcon from 'components/common/fa-icon'

import { AccountLinks } from 'data/account-links'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => {
  const links = AccountLinks.map(({ icon, href }) => (
    <a
      className="mx-2 text-natural-gray hover:text-black transition-colors"
      key={icon}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaIcon name={icon} />
    </a>
  ))

  return <div className={`flex flex-row text-2xl ${className}`}>{links}</div>
}

export default Accounts
