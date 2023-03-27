import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>)
}
