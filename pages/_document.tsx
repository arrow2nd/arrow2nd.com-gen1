import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.bunny.net" />
          <link
            href="https://fonts.bunny.net/css?family=zen-maru-gothic:400,500"
            rel="stylesheet"
          />
        </Head>
        <body className="font-default font-medium bg-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
