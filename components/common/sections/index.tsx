import type { SectionContent } from 'types/cms/section'

import Section from './section'

type Props = {
  className?: string
  contents: SectionContent[]
}

const Sections = ({ className = '', contents }: Props): JSX.Element => (
  <div className={`space-y-16 text-left md:text-center ${className}`}>
    {contents.map((item) => (
      <Section key={item.title} {...item} />
    ))}
  </div>
)

export default Sections
