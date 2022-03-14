import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../sections/shared/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Synthetix | V3GM Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>Hello World</Layout>
    </>
  )
}

export default Home
