import Link from 'next/link'
import type { CategoryContent } from 'types/cms/category'

type Props = {
  current: string
  categories: CategoryContent[]
}

const Tab = ({ current, categories }: Props): JSX.Element => {
  const buttons = categories.map(({ name }) => {
    const textStyle =
      name === current
        ? 'text-natural-white bg-natural-black'
        : 'text-natural-black hover:text-natural-white'

    return (
      <Link href={`/category/${name}`} key={name} passHref>
        <a
          className={`inline-block m-2 md:m-1 px-4 md:px-5 py-0.5 md:py-1 hover:bg-natural-black rounded-full ${textStyle} tracking-widest transition-colors`}
        >
          {name}
        </a>
      </Link>
    )
  })

  return <div className="mt-12 md:mt-16 text-center">{buttons}</div>
}

export default Tab
