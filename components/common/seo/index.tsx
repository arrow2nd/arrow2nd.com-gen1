import Head from 'next/head'
import { useRouter } from 'next/router'
import { Site } from 'data/site'

type Props = {
  title?: string
  desc?: string
  image?: string
  article?: boolean
}

const SEO = ({
  title = '',
  desc = '',
  image = '',
  article = false
}: Props): JSX.Element => {
  const { asPath } = useRouter()

  const {
    defaultTitle,
    defaultDescription,
    titleTemplate,
    originUrl,
    defaultImage,
    twitterUsername
  } = Site

  const baseUrl = originUrl ? originUrl.slice(0, -1) : ''

  const seo = {
    title: title ? titleTemplate.replace('%s', title) : defaultTitle,
    description: desc || defaultDescription,
    image: `${baseUrl}${image || defaultImage}`,
    url: `${baseUrl}${asPath}`
  }

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta
        name="twitter:card"
        content={article ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  )
}

export default SEO
