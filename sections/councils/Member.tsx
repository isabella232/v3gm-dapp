import React from 'react'
import NextLink from 'next/link'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'

type CouncilProps = {}

const Council: React.FC<CouncilProps> = ({}) => {
  // The Button opens a "vote for me" modal if the user is in an active election
  return (
    <Box textAlign="center">
      Image
      <Heading mb="2">Member Name</Heading>
      <Text mb="4">Member Tagline</Text>
      <Text>discord/twitter</Text>
      <NextLink href="/members/example" passHref>
        <Button colorScheme="teal">View Nominee/Member</Button>
      </NextLink>
    </Box>
  )
}
export default Council
