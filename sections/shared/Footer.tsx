import React from 'react'
import Image from 'next/image'
import { Flex, Box, Link } from '@chakra-ui/react'

type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex
      p={12}
      border="1px solid rgba(130, 130, 149, 0.3)"
      alignItems="center"
      fontFamily="GT America Condensed-Bold"
      textTransform="uppercase"
      color="white"
      fontSize="sm"
      lineHeight="1"
    >
      <Image src={'/images/logomark.svg'} width={42} height={30} />
      <Link ml="auto">SNX</Link>
      <Link ml="5">Synths</Link>
      <Link ml="5">Stats</Link>
      <Link ml="5">Staking</Link>
      <Link ml="5">Governance</Link>
      <Link ml="5">Build</Link>
      <Link ml="5">Community</Link>
      <Link ml="5">Careers</Link>
      <Link ml="5">Blog</Link>
      <Link ml="5">Research</Link>
      <Link ml="5">
        <Image src={'/images/discord.svg'} width={22} height={25} />
      </Link>
      <Link ml="5">
        <Image src={'/images/twitter.svg'} width={24} height={19.5} />
      </Link>
      <Link ml="5">
        <Image src={'/images/github.svg'} width={24} height={24} />
      </Link>
    </Flex>
  )
}
export default Footer
