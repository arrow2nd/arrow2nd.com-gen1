import { MdOutlineMail } from "react-icons/md";
import {
  RiDownloadLine,
  RiGithubLine,
  RiGooglePlayLine,
  RiLineLine,
  RiLink,
  RiMastodonLine,
  RiQuestionLine,
  RiTwitterLine
} from "react-icons/ri";

type Props = {
  name: string;
};

const Icon = ({ name }: Props): JSX.Element => {
  const icons: { [name: string]: JSX.Element } = {
    link: <RiLink />,
    download: <RiDownloadLine />,
    twitter: <RiTwitterLine />,
    mastodon: <RiMastodonLine />,
    mail: <MdOutlineMail />,
    github: <RiGithubLine />,
    line: <RiLineLine />,
    googleplay: <RiGooglePlayLine />
  };

  return icons[name] || <RiQuestionLine />;
};

export default Icon;
