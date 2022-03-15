import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

type IntroProps = {}

const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <Box textAlign="center" pt="8">
      <Heading mb="1">Vote for each Council</Heading>
      <Text fontSize="sm" mb="10" opacity="0.7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sit
        donec id etiam id morbi viverra.
      </Text>
    </Box>
  )
}
export default Intro
