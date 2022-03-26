import { motion } from 'framer-motion'
import Image from 'next/image'

import { fadeInPopup } from 'animations/variants'

import arrow2nd from 'public/arrow2nd.png'

const Arrow2nd = (): JSX.Element => (
  <motion.div
    className="flex mt-16 justify-center"
    initial="hidden"
    animate="visible"
    variants={fadeInPopup}
  >
    <Image
      src={arrow2nd}
      alt="arrow2nd"
      width={256}
      height={177}
      placeholder="blur"
    />
  </motion.div>
)

export default Arrow2nd
