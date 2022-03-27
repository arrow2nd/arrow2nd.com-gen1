import { library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faGithub,
  faGooglePlay,
  faLine,
  faMastodon,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

import 'styles/globals.css'

library.add(
  faDownload,
  faLink,
  faTwitter,
  faMastodon,
  faGithub,
  faLine,
  faGooglePlay
)

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
    <Component key={router.route} {...pageProps} />
  </AnimatePresence>
)

export default MyApp
