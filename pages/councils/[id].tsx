import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from '../../sections/councils/Intro'
import CurrentMembers from '../../sections/councils/CurrentMembers'
import PastElection from '../../sections/councils/PastElection'
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  const activeElection = true
  return (
    <>
      <Head>
        <title>Synthetix | V3GM Council</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container maxW="container.xl">
        <Intro councilName="Spartan Council" activeElection={activeElection} />
        <CurrentMembers />
        <PastElection />
        <PastElection />
        <PastElection />
      </Container>
    </>
  )
}

export default Home
