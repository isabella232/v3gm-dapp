import React from 'react'
import NextLink from 'next/link'
import { Box, Heading, Text, Button, Flex, Divider } from '@chakra-ui/react'

type CouncilProps = {}

const Council: React.FC<CouncilProps> = ({}) => {
  return (
    <Box textAlign="center" position="relative">
      <Box
        d="block"
        width="120px"
        height="120px"
        borderRadius="60px"
        bg="#09092F"
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        border="2px solid #4B01E0"
      />
      <Box
        background="#10104E"
        p="5"
        boxShadow="0px 14px 14px 0px #00000040;"
        borderRadius="5px"
        marginTop="60px"
        paddingTop="60px"
      >
        <Heading size="md" mb="3" mt="6">
          Council Name
        </Heading>
        <Text fontSize="sm" mb="6" opacity="0.7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra
        </Text>
        <Box
          w="100"
          h="1px"
          bg="linear-gradient(73.6deg, #8E2DE2 2.11%, #4B01E0 90.45%)"
          mb="4"
        />
        <Flex mb="6">
          <Box textAlign="left">
            <Text fontSize="xs" color="#828295" lineHeight="1">
              Nominations
            </Text>
            <Heading fontFamily="GT America Extended Bold">182</Heading>
          </Box>
          <Box ml="auto" textAlign="right">
            <Text fontSize="xs" color="#828295" lineHeight="1">
              Live Votes
            </Text>
            <Heading fontFamily="GT America Extended Bold">1,748</Heading>
          </Box>
        </Flex>
        <NextLink href="/councils/example" passHref>
          <Button
            w="100%"
            fontWeight="bold"
            borderRadius="4"
            size="lg"
            color="black"
            bg="linear-gradient(73.6deg, #85FFC4 2.11%, #5CC6FF 90.45%);"
            boxShadow="0px 0px 10px 0px #000000E5;"
            fontSize="md"
          >
            View Candidates
          </Button>
        </NextLink>
      </Box>
    </Box>
  )
}
export default Council
