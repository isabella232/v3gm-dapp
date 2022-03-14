import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

type IntroProps = {}

const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <Box textAlign="center">
      <Heading>Vote for each Council</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sit
        donec id etiam id morbi viverra.
      </Text>
    </Box>
  )
}
export default Intro
