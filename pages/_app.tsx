import themeConfig from '../styles/theme.js'
import type { AppProps } from 'next/app'
import { Mainnet, DAppProvider, Config } from '@usedapp/core'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Layout from '../sections/shared/Layout'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

const theme = extendTheme(themeConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DAppProvider config={config}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </ChakraProvider>
  )
}

export default MyApp
