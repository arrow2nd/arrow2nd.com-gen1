import { IconName } from '@fortawesome/fontawesome-common-types'
import { AboutContent } from 'types/cms/about'

export type ImageContent = {
  url: string
  width: number
  height: number
}

export type WorkContent = {
  id: string
  images: {
    image: ImageContent
  }[]
  category: {
    name: string
  }
  title: string
  description: string
  sections: AboutContent[]
  links: {
    icon: IconName
    href: string
    text: string
  }[]
}
