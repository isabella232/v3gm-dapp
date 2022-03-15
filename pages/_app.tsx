import themeConfig from '../styles/theme.js'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Connector from '../containers/Connector'
import { RecoilRoot } from 'recoil'

const theme = extendTheme(themeConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Connector.Provider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Connector.Provider>
    </RecoilRoot>
  )
}

export default MyApp
