import '@styles/globals.css'
import Head from "next/head";
import type { AppProps } from 'next/app'
// Layout
import Layout from '@components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tooles - ANG</title>
        <meta name="description" content="Tooles desarrollada por Angelo Gaona" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://tooles.co/wp-content/uploads/2023/01/cropped-FAVICON-MORADO-32x32.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}