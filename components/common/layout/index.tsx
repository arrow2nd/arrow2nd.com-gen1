import { motion } from 'framer-motion'

import { pageTransitionAnim } from 'animations/variants'

import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <motion.div className="flex flex-col min-h-screen" {...pageTransitionAnim}>
    <Header />
    <main className="flex-1 mt-16">{children}</main>
    <Footer />
  </motion.div>
)

export default Layout
