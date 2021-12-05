import Link from 'next/link'
import { PageLinks } from 'data/page-links'

type Props = {
  className: string
}

const Links = ({ className }: Props): JSX.Element => (
  <div
    className={`px-4 py-2 bg-gray-200 text-natural-gray rounded-full ${className}`}
  >
    {PageLinks.map(({ name, href }) => (
      <Link href={href} key={name} passHref>
        <a className="mx-4 hover:text-natural-black tracking-widest transition-colors">
          {name}
        </a>
      </Link>
    ))}
  </div>
)

export default Links
