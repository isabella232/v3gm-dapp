import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Text } from '@chakra-ui/react'

const Members: NextPage = () => {
  return (
    <>
      <Head>
        <title>Synthetix | V3GM Member</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container maxW="container.xl">
        <Text>Hero</Text>
        <Text>Nominations</Text>
        <Text>Profile</Text>
        <Text>Proposals</Text>
      </Container>
    </>
  )
}

export default Members
