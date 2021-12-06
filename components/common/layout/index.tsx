import Footer from 'components/common/layout/footer'
import Header from 'components/common/layout/header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 mx-8 md:mx-10 mt-16">{children}</main>
    <Footer />
  </div>
)

export default Layout
