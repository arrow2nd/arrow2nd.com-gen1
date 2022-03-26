import Accounts from 'components/common/accounts'

const Footer = (): JSX.Element => (
  <div className="p-20 flex flex-col items-center space-y-6 text-black">
    <Accounts />
    <p className="text-base">© {new Date().getFullYear()} arrow2nd</p>
  </div>
)

export default Footer
