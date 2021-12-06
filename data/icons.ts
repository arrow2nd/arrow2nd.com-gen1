import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

type IconType = {
  [name: string]: [plefix: IconPrefix, name: IconName]
}

export const Icons: IconType = {
  link: ['fas', 'link'],
  download: ['fas', 'download'],
  twitter: ['fab', 'twitter'],
  mastodon: ['fab', 'mastodon'],
  github: ['fab', 'github'],
  line: ['fab', 'line'],
  googleplay: ['fab', 'google-play']
}
