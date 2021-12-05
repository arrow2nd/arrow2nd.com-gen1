import Accounts from 'components/common/accounts'

const Footer = (): JSX.Element => (
  <div className="flex flex-col py-12 mt-16 text-center items-center">
    <Accounts />
    <p className="mt-6 text-sm text-natural-black">
      © {new Date().getFullYear()} arrow2nd
    </p>
  </div>
)

export default Footer
