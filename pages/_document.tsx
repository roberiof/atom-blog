import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon/favicon.png" sizes="any" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
