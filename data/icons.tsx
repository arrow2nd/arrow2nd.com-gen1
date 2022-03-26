import React from 'react'
import {
  RiDownloadLine,
  RiGithubLine,
  RiGooglePlayLine,
  RiLineLine,
  RiLink,
  RiMastodonLine,
  RiTwitterLine
} from 'react-icons/ri'

type Icon = {
  [name: string]: React.ReactNode
}

export const icons: Icon = {
  link: <RiLink />,
  download: <RiDownloadLine />,
  twitter: <RiTwitterLine />,
  mastodon: <RiMastodonLine />,
  github: <RiGithubLine />,
  line: <RiLineLine />,
  googleplay: <RiGooglePlayLine />
}
