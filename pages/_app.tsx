import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faMastodon,
  faGithub,
  faLine,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faDownload,
  faLink,
  faTwitter,
  faMastodon,
  faGithub,
  faLine,
  faGooglePlay
)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
