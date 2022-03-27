import Button from 'components/common/button'

import type { CategoryContent } from 'types/cms/category'

type Props = {
  current: string
  categories: CategoryContent[]
}

const Tab = ({ current, categories }: Props): JSX.Element => (
  <div className="mt-10 flex flex-wrap">
    {categories.map(({ name }) => (
      <Button
        key={name}
        className="inline-block"
        href={`/category/${name}`}
        fill={current === name}
      >
        {name}
      </Button>
    ))}
  </div>
)

export default Tab
