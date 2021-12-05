import Image from 'next/image'
import Accounts from 'components/common/accounts'

const Top = (): JSX.Element => (
  <div className="flex flex-col h-screen justify-center items-center transition-anim">
    <Image
      className="border border-gray-200 rounded-full"
      src="/arrow2nd.png"
      alt="arrow2nd"
      width={200}
      height={200}
    />
    <span className="mt-6 text-3xl text-natural-gray tracking-super">
      arrow2nd
    </span>
    <Accounts className="mt-6" />
  </div>
)

export default Top
