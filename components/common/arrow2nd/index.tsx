import Image from 'next/image'

import arrow2nd from 'public/arrow2nd.png'

type Props = {
  size?: number
}

const Arrow2nd = ({ size = 200 }: Props): JSX.Element => (
  <Image
    className="rounded-full"
    src={arrow2nd}
    alt="arrow2nd"
    width={size}
    height={size}
    placeholder="blur"
  />
)

export default Arrow2nd
