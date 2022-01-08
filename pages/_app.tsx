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

import { useTransitionFix } from 'hooks/useTransitionFix'

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

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const transitionCallback = useTransitionFix()

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => {
        transitionCallback()
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 }) // ページトップへスクロール
        }
      }}
    >
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
