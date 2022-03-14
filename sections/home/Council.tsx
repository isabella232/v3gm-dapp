import React from 'react'
import NextLink from 'next/link'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'

type CouncilProps = {}

const Council: React.FC<CouncilProps> = ({}) => {
  return (
    <Box textAlign="center">
      Image
      <Heading mb="2">Council Name</Heading>
      <Text mb="4">Council Tagline</Text>
      <Flex>
        <Box textAlign="left">
          <Text>Nominations</Text>
          <Heading>182</Heading>
        </Box>
        <Box ml="auto" textAlign="right">
          <Text>Live Votes</Text>
          <Heading>1,748</Heading>
        </Box>
      </Flex>
      <NextLink href="/councils/example" passHref>
        <Button colorScheme="teal">View Candidates</Button>
      </NextLink>
    </Box>
  )
}
export default Council
