import { MdOutlineMail } from 'react-icons/md'
import {
  RiDownloadLine,
  RiGithubLine,
  RiGooglePlayLine,
  RiLineLine,
  RiLink,
  RiQuestionLine,
  RiTwitterLine
} from 'react-icons/ri'

type Props = {
  name: string
}

const Icon = ({ name }: Props): JSX.Element => {
  const icons: { [name: string]: JSX.Element } = {
    link: <RiLink />,
    download: <RiDownloadLine />,
    twitter: <RiTwitterLine />,
    mail: <MdOutlineMail />,
    github: <RiGithubLine />,
    line: <RiLineLine />,
    googleplay: <RiGooglePlayLine />
  }

  return icons[name] || <RiQuestionLine />
}

export default Icon
