import React, { useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  Flex,
  Box,
  Link,
  IconButton,
  Button,
  Select,
  useToast,
} from '@chakra-ui/react';
import { SettingsIcon, ChevronDownIcon } from '@chakra-ui/icons';
// import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'
import Connector from '../../containers/Connector';
import { chains } from '../../constants/chains';
import { useSetChain } from '@web3-onboard/react';
import { truncateAddress } from '../../constants/helpers';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const { connectWallet, disconnectWallet, chain, account, web3Onboard } =
    Connector.useContainer();
  const toast = useToast();

  // useEffect(() => {
  //   if (web3Onboard) {
  //     const currentState = web3Onboard.state.get();
  //     console.log(currentState);
  //   }
  // }, [web3Onboard]);

  console.log(chain);

  const handleChangeChain = async (chainId: string) => {
    if (web3Onboard) {
      try {
        const success = await web3Onboard.setChain({ chainId: chainId });
        if (!success) {
          throw new Error('User Rejected Network Change');
        }
      } catch (error: any) {
        toast({
          title: 'Something went wrong',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

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

      <Box ml="auto" display={'flex'}>
        {/* <IconButton
          borderColor="gray.800"
          variant="outline"
          aria-label="Settings"
          icon={<SettingsIcon />}
        /> */}
        {account?.address && (
          <Select
            fontWeight={'bold'}
            display={'flex'}
            variant={'outline'}
            borderColor="gray.800"
            fontSize={'xs'}
            ml="3"
            defaultValue="0xA"
            value={chain[0].id}
            onChange={(event) => handleChangeChain(event.target.value)}
          >
            {chains.map((chain) => {
              return (
                <option key={chain.id} value={chain.id}>
                  {chain.label}
                </option>
              );
            })}
          </Select>
        )}
        {account?.address ? (
          <Button
            onClick={disconnectWallet}
            variant="outline"
            ml="3"
            borderColor="gray.800"
            fontSize="xs"
          >
            {truncateAddress(account.address)}
          </Button>
        ) : (
          <Button
            onClick={connectWallet}
            variant="outline"
            ml="3"
            borderColor="gray.800"
            fontSize="xs"
          >
            Connect Wallet
          </Button>
        )}
      </Box>
    </Flex>
  );
};
export default Header;
