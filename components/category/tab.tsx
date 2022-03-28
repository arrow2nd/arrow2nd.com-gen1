import Button from 'components/common/button'

import type { CategoryContent } from 'types/cms/category'

type Props = {
  current: string
  categories: CategoryContent[]
}

const Tab = ({ current, categories }: Props): JSX.Element => {
  const buttons = categories.map(({ name }) => (
    <Button
      key={name}
      className="inline-block"
      href={`/category/${name}`}
      fill={current === name}
    >
      {name}
    </Button>
  ))

  return <div className="mt-10 flex flex-wrap">{buttons}</div>
}

export default Tab
