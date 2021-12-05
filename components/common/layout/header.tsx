import Link from 'next/link'
import Image from 'next/image'
import { PageLinks } from 'data/page-links'

const Header = (): JSX.Element => (
  <nav className="flex flex-row px-8 md:px-10 py-6 w-full items-center">
    <Link href="/">
      <a>
        <Image
          className="border border-gray-200 rounded-full"
          src="/arrow2nd.png"
          alt="icon"
          width={45}
          height={45}
          loading="eager"
        />
      </a>
    </Link>
    <div className="ml-auto">
      {PageLinks.map(({ href, name }) => (
        <Link href={href} key={name} passHref>
          <a className="ml-6 tracking-widest text-natural-gray hover:text-arrow2nd transition-colors">
            {name}
          </a>
        </Link>
      ))}
    </div>
  </nav>
)

export default Header
