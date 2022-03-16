import { useCallback, useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { useRecoilState } from 'recoil';

import initWeb3Onboard from './config';
import { appReadyState } from '../../store/app';

import {
  ConnectedChain,
  InitOptions,
  OnboardAPI,
  WalletState,
} from '@web3-onboard/core';
import { Account, AppState } from '@web3-onboard/core/dist/types';

const NETWORKS = {
  kovanOptimism: {
    name: 'kovanOptimism',
    color: '#f01a37',
    chainId: 69,
    blockExplorer: 'https://kovan-optimistic.etherscan.io/',
    rpcUrl: `https://kovan.optimism.io`,
    gasPrice: 0,
  },
  optimism: {
    name: 'optimism',
    color: '#f01a37',
    chainId: 10,
    blockExplorer: 'https://optimistic.etherscan.io/',
    rpcUrl: `https://mainnet.optimism.io`,
  },
};

const initialNetwork = NETWORKS.optimism;

const networkOptions = [initialNetwork.name, 'kovanOptimism'];

const useConnector = () => {
  const [web3Onboard, setWeb3Onboard] = useState<OnboardAPI | null>(null);
  const [wallets, setWallets] = useState<WalletState[] | null>(null);
  const [account, setActiveAccount] = useState<Account | null>(null);
  const [chain, setChain] = useState<ConnectedChain[] | null>(null);
  const [onboardState, setOnboardState] = useState<AppState | null>(null);

  const [isAppReady, setAppReady] = useRecoilState(appReadyState);

  // const [injectedProvider, setInjectedProvider] = useState(null)
  // const [address, setAddress] = useState()
  // const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0])

  useEffect(() => {
    const onboard = initWeb3Onboard();
    setWeb3Onboard(onboard);
    setAppReady(true);
  }, []);

  // useEffect(() => {
  //   if (wallets && web3Onboard) {
  //     const notifyChain = async () => {
  //       const success = await web3Onboard.setChain({ chainId: '0xA' });
  //       // @TODO: handle network rejection error
  //       console.log(success);
  //     };
  //     notifyChain();
  //   }
  // }, [wallets, web3Onboard]);

  useEffect(() => {
    if (web3Onboard) {
      const currentState = web3Onboard.state.get();
      setOnboardState(currentState);
    }
  }, [web3Onboard]);

  useEffect(() => {
    if (wallets) {
      setActiveAccount(wallets[0].accounts[0]);
      setChain(wallets[0].chains);
    }
  }, [wallets]);

  const connectWallet = async () => {
    if (web3Onboard) {
      const wallets = await web3Onboard.connectWallet();
      setWallets(wallets);
    } else {
      console.log('web3Onboard is not available');
    }
  };

  const disconnectWallet = async () => {
    if (web3Onboard) {
      const [primaryWallet] = web3Onboard.state.get().wallets;
      await web3Onboard.disconnectWallet({ label: primaryWallet.label });
    } else {
      console.log('web3Onboard is not available');
    }
  };

  return {
    connectWallet,
    disconnectWallet,
    wallets,
    chain,
    account,
    onboardState,
    web3Onboard,
  };
};

const Connector = createContainer(useConnector);

export default Connector;
