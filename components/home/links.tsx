import Link from 'next/link'
import { PageLinks } from 'data/page-links'

type Props = {
  className: string
}

const Links = ({ className }: Props): JSX.Element => {
  const pageLinks = PageLinks.map(({ name, href }) => (
    <Link href={href} key={name} passHref>
      <a className="mx-4 hover:text-natural-black tracking-widest transition-colors">
        {name}
      </a>
    </Link>
  ))

  return (
    <div
      className={`px-4 py-2 bg-gray-200 text-natural-gray rounded-full ${className}`}
    >
      {pageLinks}
    </div>
  )
}

export default Links
