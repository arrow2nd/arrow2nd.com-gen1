import Accounts from 'components/common/accounts'
import Arrow2nd from 'components/common/arrow2nd'
import SEO from 'components/common/seo'
import Links from 'components/home/links'

const Home = (): JSX.Element => (
  <div className="flex flex-col h-screen justify-center items-center animate-fadeIn">
    <SEO />
    <Arrow2nd />
    <span className="mt-6 text-3xl text-natural-black tracking-super">
      arrow2nd
    </span>
    <Accounts className="mt-6" />
    <Links className="mt-6" />
  </div>
)

export default Home
