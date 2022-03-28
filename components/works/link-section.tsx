import Button from 'components/common/button'
import Icon from 'components/common/icon'
import Section from 'components/common/sections/section'

import { LinkContent } from 'types/cms/work'

type Props = {
  items: LinkContent[]
}

const LinkSection = ({ items }: Props): JSX.Element => {
  const links = items.map(({ icon, text, href }) => (
    <Button
      key={text}
      className="inline-flex flex-row items-center"
      href={href}
      targetBlank
    >
      <Icon name={icon[0]} />
      <span className="ml-2">{text}</span>
    </Button>
  ))

  return (
    <Section className="mt-12" title="リンク" dataTestId="link-section">
      <div className="mt-2 flex flex-wrap">{links}</div>
    </Section>
  )
}

export default LinkSection
