import Accounts from 'components/common/accounts'

const Footer = (): JSX.Element => (
  <div
    className="w-full px-10 py-12 flex items-center text-main"
    data-testid="footer"
  >
    <p className="text-base">{`©️ ${new Date().getFullYear()}`} arrow2nd</p>
    <Accounts className="ml-auto" />
  </div>
)

export default Footer
