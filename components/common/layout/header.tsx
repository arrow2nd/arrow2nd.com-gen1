import Link from 'next/link'

import Arrow2nd from 'components/common/arrow2nd'

import { PageLinks } from 'data/page-links'

const Header = (): JSX.Element => {
  const pageLinks = PageLinks.map(({ href, name }) => (
    <Link href={href} key={name} passHref>
      <a className="ml-6 tracking-widest text-natural-gray hover:text-arrow2nd transition-colors">
        {name}
      </a>
    </Link>
  ))

  return (
    <nav className="flex flex-row px-8 md:px-10 py-6 w-full items-center">
      <Link href="/" passHref>
        <a className="inline-flex rounded-full border border-gray-300">
          <Arrow2nd className="bg-white" size={48} />
        </a>
      </Link>
      <div className="ml-auto">{pageLinks}</div>
    </nav>
  )
}

export default Header
