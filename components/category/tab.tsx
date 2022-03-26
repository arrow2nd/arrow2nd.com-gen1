import { motion } from 'framer-motion'
import Link from 'next/link'

import { linkAnim } from 'animations/variants'

import type { CategoryContent } from 'types/cms/category'

type Props = {
  current: string
  categories: CategoryContent[]
}

const Tab = ({ current, categories }: Props): JSX.Element => (
  <div className="mt-10 flex flex-wrap">
    {categories.map(({ name }) => (
      <Link href={`/category/${name}`} key={name} passHref>
        <motion.a
          className={`flex-none inline-block mt-2 mr-2 md:mr-4 px-6 py-1 ${
            current === name
              ? 'text-white bg-main'
              : 'text-main border-2 border-main'
          } rounded-xl tracking-widest`}
          {...linkAnim}
        >
          {name}
        </motion.a>
      </Link>
    ))}
  </div>
)

export default Tab
