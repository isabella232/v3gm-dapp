import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SelfNominateAlert from './SelfNominateAlert'
import { Box, Container } from '@chakra-ui/react'

type LayoutProps = {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      as="main"
      background="black"
      minHeight="100vh"
      color="rgba(255,255,255,0.85)"
      d="flex"
      flexDirection="column"
    >
      <Box flex="1">
        <Header />
        <Container maxW="container.xl">
          <SelfNominateAlert />
        </Container>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
export default Layout
