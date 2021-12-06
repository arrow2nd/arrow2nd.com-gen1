import Image from 'next/image'

type Props = {
  size?: number
}

const Arrow2nd = ({ size = 200 }: Props): JSX.Element => (
  <Image
    className="border border-gray-200 rounded-full"
    src="/arrow2nd.png"
    alt="arrow2nd"
    width={size}
    height={size}
  />
)

export default Arrow2nd
