import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from 'data/icons'

type Props = {
  name: string
}

const FaIcon = ({ name }: Props): JSX.Element => (
  <FontAwesomeIcon icon={Icons[name] || Icons['link']} />
)

export default FaIcon
