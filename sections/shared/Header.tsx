import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Flex, Box, Link, IconButton, Button } from '@chakra-ui/react'
import { SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const connectedWallets = useWallets()

  return (
    <Flex
      py={3}
      px={12}
      background="#0B0B22"
      borderBottom="1px solid rgba(130, 130, 149, 0.3)"
      mb="5"
      alignItems="center"
    >
      <NextLink href="/" passHref>
        <Link>
          <Image src={'/images/logo.svg'} height={15} width={120} />
        </Link>
      </NextLink>

      <Box ml="auto">
        <IconButton
          borderColor="gray.800"
          variant="outline"
          aria-label="Settings"
          icon={<SettingsIcon />}
        />
        <Button variant="outline" ml="3" borderColor="gray.800" fontSize="xs">
          Ethereum <ChevronDownIcon />
        </Button>
        <Button
          onClick={() => connect()}
          variant="outline"
          ml="3"
          borderColor="gray.800"
          fontSize="xs"
        >
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  )
}
export default Header
