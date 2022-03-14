import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

type IntroProps = {
  councilName: string
  activeElection: boolean
}

const Intro: React.FC<IntroProps> = ({ councilName, activeElection }) => {
  return <Box textAlign="center">Intro</Box>
}
export default Intro
