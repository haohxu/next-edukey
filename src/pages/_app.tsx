import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </ChakraProvider>)
}
