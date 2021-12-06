import { AboutContent } from 'types/cms/about'

export type LinkContent = {
  icon: string[]
  href: string
  text: string
}

export type ImageContent = {
  image: {
    url: string
    width: number
    height: number
  }
  alt: string
}

export type WorkContent = {
  id: string
  images: ImageContent[]
  category: {
    name: string
  }
  title: string
  description: string
  sections: AboutContent[]
  links: LinkContent[]
}
