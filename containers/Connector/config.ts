import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
import trezorModule from '@web3-onboard/trezor';
import ledgerModule from '@web3-onboard/ledger';
import walletConnectModule from '@web3-onboard/walletconnect';
import walletLinkModule from '@web3-onboard/walletlink';
import gnosisModule from '@web3-onboard/gnosis';
import { base64SNXIcon } from '../../constants/iconBase64';
import { chains } from '../../constants/chains';

const injected = injectedModule();
const walletLink = walletLinkModule({ darkMode: true });
const walletConnect = walletConnectModule();
const gnosis = gnosisModule();
const ledger = ledgerModule();

const trezorOptions = {
  email: '',
  appUrl: 'https://www.v3gm.synthetix.io',
};
const trezor = trezorModule(trezorOptions);

const initWeb3Onboard = () =>
  init({
    wallets: [injected, ledger, walletLink, trezor, walletConnect, gnosis],
    chains: chains,
    appMetadata: {
      name: 'V3GM',
      icon: base64SNXIcon,
      description: 'Synthetix Governance dApp',
      recommendedInjectedWallets: [
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      ],
      agreement: {
        version: '1.0.0',
        termsUrl: 'https://www.blocknative.com/terms-conditions',
        privacyUrl: 'https://www.blocknative.com/privacy-policy',
      },
    },
  });

export default initWeb3Onboard;
