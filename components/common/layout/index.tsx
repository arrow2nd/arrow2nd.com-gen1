import { motion } from 'framer-motion'

import { transition } from 'animations/variants'

import Footer from 'components/common/layout/footer'
import Header from 'components/common/layout/header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <motion.div className="flex flex-col min-h-screen" {...transition}>
    <Header />
    <main className="flex-1 mx-8 md:mx-10 mt-16">{children}</main>
    <Footer />
  </motion.div>
)

export default Layout
