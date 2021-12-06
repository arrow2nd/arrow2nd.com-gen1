import About from 'components/about'
import type { NextPage, InferGetStaticPropsType } from 'next'
import { Client } from 'libs/client'
import { AboutContent } from 'types/cms/about'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const AboutPage: NextPage<Props> = (props: Props) => <About {...props} />

export default AboutPage

export const getStaticProps = async () => {
  const results = await Client.getList<AboutContent>({ endpoint: 'about' })

  return {
    props: {
      contents: results.contents
    }
  }
}
