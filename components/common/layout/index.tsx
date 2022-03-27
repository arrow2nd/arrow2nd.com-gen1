import { motion } from 'framer-motion'

import { pageTransition } from 'animations/variants'

import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <motion.div
    className="flex flex-col items-center min-h-screen"
    {...pageTransition}
  >
    <Header />
    <main className="flex-1 w-full max-w-screen-lg px-10 py-12">
      {children}
    </main>
    <Footer />
  </motion.div>
)

export default Layout
