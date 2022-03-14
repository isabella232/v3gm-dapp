import React from 'react'
import { Flex, Box, Link } from '@chakra-ui/react'

type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex
      p={5}
      border="1px solid rgba(130, 130, 149, 0.3)"
      mt="5"
      alignItems="center"
    >
      logomark
      <Box ml="auto">
        <Link ml="5">SNX</Link>
        <Link ml="5">Synths</Link>
        <Link ml="5">Stats</Link>
        <Link ml="5">Staking</Link>
        <Link ml="5">Governance</Link>
        <Link ml="5">Build</Link>
        <Link ml="5">Community</Link>
        <Link ml="5">Careers</Link>
        <Link ml="5">Blog</Link>
        <Link ml="5">Research</Link>
        <Link ml="5">Discord</Link>
        <Link ml="5">Twitter</Link>
        <Link ml="5">GitHub</Link>
      </Box>
    </Flex>
  )
}
export default Footer
