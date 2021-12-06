import Section from 'components/common/sections/section'

import type { SectionContent } from 'types/cms/section'

type Props = {
  contents: SectionContent[]
}

const Sections = ({ contents }: Props): JSX.Element => {
  const sections = contents.map((item) => (
    <Section key={item.title} {...item} />
  ))

  return <div className="text-center">{sections}</div>
}

export default Sections
