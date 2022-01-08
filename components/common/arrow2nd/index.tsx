import Image from 'next/image'

type Props = {
  size?: number
}

const Arrow2nd = ({ size = 200 }: Props): JSX.Element => (
  <Image
    className="rounded-full"
    src="/arrow2nd.png"
    alt="arrow2nd"
    width={size}
    height={size}
    loading="eager"
  />
)

export default Arrow2nd
