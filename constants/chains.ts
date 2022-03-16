export const chains = [
  {
    id: '0xA',
    token: 'ETH',
    label: 'Optimism Mainnet',
    rpcUrl: `https://optimism-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
  },
  {
    id: '0x45',
    token: 'KOR',
    label: 'Optimism Kovan',
    rpcUrl: `https://optimism-kovan.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
  },
];
