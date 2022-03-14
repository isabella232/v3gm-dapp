import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, Box, Link, IconButton, Button } from '@chakra-ui/react'
import { SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex
      p={5}
      borderBottom="1px solid rgba(130, 130, 149, 0.3)"
      mb="5"
      alignItems="center"
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src={'/logo.svg'} height={15} width={120} />
        </Link>
      </NextLink>

      <Box ml="auto">
        <IconButton
          variant="outline"
          aria-label="Settings"
          icon={<SettingsIcon />}
        />
        <Button variant="outline" ml="3">
          Ethereum <ChevronDownIcon />
        </Button>
        <Button variant="outline" ml="3">
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  )
}
export default Header
