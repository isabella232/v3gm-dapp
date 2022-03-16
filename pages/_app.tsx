import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import themeConfig from '../styles/theme.js'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Fonts from '../sections/shared/Fonts'
import Connector from '../containers/Connector'
import { RecoilRoot } from 'recoil'

const theme = extendTheme(themeConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Connector.Provider>
        <ChakraProvider theme={theme}>
          <Fonts />

          <Component {...pageProps} />
        </ChakraProvider>
      </Connector.Provider>
    </RecoilRoot>
  )
}

export default MyApp
