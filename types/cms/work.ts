import { IconName } from '@fortawesome/fontawesome-common-types'
import { AboutContent } from 'types/cms/about'

type Link = {
  icon: IconName
  href: string
  text: string
}

export type WorkContent = {
  id: string
  category: {
    name: string
  }
  title: string
  description: string
  sections: AboutContent[]
  links: Link[]
}
