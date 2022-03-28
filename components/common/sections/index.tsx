import type { SectionContent } from 'types/cms/section'

import Section from './section'

type Props = {
  className?: string
  contents: SectionContent[]
}

const Sections = ({ className = '', contents }: Props): JSX.Element => {
  const textSections = contents.map(({ title, text }) => {
    const lines = text.split('\n').map((line) => <p key={line}>{line}</p>)

    return (
      <Section key={title} title={title}>
        <div className="mt-2 text-sm md:text-base font-normal">{lines}</div>
      </Section>
    )
  })

  return (
    <div className={`space-y-12 text-left ${className}`}>{textSections}</div>
  )
}

export default Sections
