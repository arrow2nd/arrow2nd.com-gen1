import FaIcon from 'components/common/fa-icon'

import type { LinkContent } from 'types/cms/work'

const LinkButton = ({ icon, text, href }: LinkContent): JSX.Element => (
  <a
    className={`inline-block m-2 px-6 py-1.5 text-sm md:text-base text-natural-white bg-natural-gray hover:bg-black rounded-full shadow-md transition-colors`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaIcon name={icon[0]} />
    <span className="ml-1.5 inline-block">{text}</span>
  </a>
)

export default LinkButton
