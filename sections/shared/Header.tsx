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
          {connectedChain ? connectedChain.namespace : 'Ethereum'}{' '}
          <ChevronDownIcon />
        </Button>
        {wallet ? (
          <Button onClick={() => {}} variant="outline" ml="3">
            {connectedWallets[0].accounts[0].address}
          </Button>
        ) : (
          <Button onClick={() => connect()} variant="outline" ml="3">
            Connect Wallet
          </Button>
        )}
      </Box>
    </Flex>
  )
}
export default Header
