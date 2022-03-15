import { useCallback, useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import { useRecoilState } from 'recoil'

import initWeb3Onboard from './config'
import { appReadyState } from '../../store/app'

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
}

const initialNetwork = NETWORKS.optimism

const networkOptions = [initialNetwork.name, 'kovanOptimism']

const useConnector = () => {
  const [web3Onboard, setWeb3Onboard] = useState(null)
  const [injectedProvider, setInjectedProvider] = useState(null)
  const [address, setAddress] = useState()
  // @TODO: Support OVM
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0])
  const [wallets, setWallets] = useState()

  const [isAppReady, setAppReady] = useRecoilState(appReadyState)

  useEffect(() => {
    const onboard = initWeb3Onboard()
    setWeb3Onboard(onboard)
    setAppReady(true)
  }, [])

  async function connectWallet() {
    const wallets = await web3Onboard.connectWallet()
  }

  return {
    connectWallet,
    wallets,
  }
}

const Connector = createContainer(useConnector)

export default Connector
