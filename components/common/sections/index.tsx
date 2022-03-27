import type { SectionContent } from 'types/cms/section'

import Section from './section'

type Props = {
  className?: string
  contents: SectionContent[]
}

const Sections = ({ className = '', contents }: Props): JSX.Element => (
  <div className={`space-y-12 text-left ${className}`}>
    {contents.map((item) => (
      <Section key={item.title} {...item} />
    ))}
  </div>
)

export default Sections
