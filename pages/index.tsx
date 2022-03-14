import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from '../sections/home/Intro'
import Councils from '../sections/home/Councils'
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Synthetix | V3GM Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container maxW="container.xl">
        <Intro />
        <Councils />
      </Container>
    </>
  )
}

export default Home
