import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="flex flex-col m-8 min-h-screen">
    <Header />
    <main className="flex-1 mt-16">{children}</main>
    <Footer />
  </div>
)

export default Layout
