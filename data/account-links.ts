import { IconName } from '@fortawesome/fontawesome-common-types'

type AccountLink = {
  icon: IconName
  href: string
}

export const AccountLinks: AccountLink[] = [
  {
    icon: 'twitter',
    href: 'https://twitter.com/arrow_2nd'
  },
  {
    icon: 'mastodon',
    href: 'https://imastodon.net/@arrow2nd'
  },
  {
    icon: 'github',
    href: 'https://github.com/arrow2nd'
  }
]
