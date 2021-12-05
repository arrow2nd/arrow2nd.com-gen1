import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccountLinks } from 'data/account-links'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => (
  <div className={`flex flex-row text-2xl ${className}`}>
    {AccountLinks.map(({ icon, href }) => (
      <a
        className="mx-2 text-natural-gray hover:text-black transition-colors"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={icon}
      >
        <FontAwesomeIcon icon={['fab', icon]} />
      </a>
    ))}
  </div>
)

export default Accounts
