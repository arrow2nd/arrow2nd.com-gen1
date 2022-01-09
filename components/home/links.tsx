import Link from 'next/link'

import { PageLinks } from 'data/page-links'

type Props = {
  className: string
}

const Links = ({ className }: Props): JSX.Element => {
  const pageLinks = PageLinks.map(({ name, href }) => (
    <Link key={name} href={href} passHref>
      <a className="mx-4 hover:text-natural-black tracking-widest transition-colors">
        {name}
      </a>
    </Link>
  ))

  return (
    <div
      className={`px-4 py-2 bg-blue-gray text-natural-gray rounded-full shadow-md ${className}`}
    >
      {pageLinks}
    </div>
  )
}

export default Links
