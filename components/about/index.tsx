import { motion } from 'framer-motion'

import { fadeInPopup } from 'animations/variants'

import Arrow2nd from 'components/common/arrow2nd'
import Layout from 'components/common/layout'
import Sections from 'components/common/sections'
import SEO from 'components/common/seo'
import Title from 'components/common/title'

import type { SectionContent } from 'types/cms/section'

type Props = {
  contents: SectionContent[]
}

const About = ({ contents }: Props): JSX.Element => (
  <Layout>
    <SEO title="about" />
    <Title text="about" />
    <motion.div
      className="flex mt-16 justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeInPopup}
    >
      <Arrow2nd />
    </motion.div>
    <Sections contents={contents} />
  </Layout>
)

export default About
