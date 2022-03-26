import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, DarkMode } from '@chakra-ui/react'
import { theme } from '../utils/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DarkMode>
        <Component {...pageProps} />
      </DarkMode>
    </ChakraProvider>
  )
}

export default MyApp
