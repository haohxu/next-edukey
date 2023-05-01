import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Inter, Genos } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumbs";

import { QuizResultStoreProvider } from "@/context/QuizResultStore";
import { CompareCoursesStoreProvider } from "@/context/CompareCoursesStore";

const inter = Inter({ subsets: ["latin"] });
const genos = Genos({ subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    inter: inter.style.fontFamily,
    genos: genos.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight={"100vh"} position={"relative"} paddingBottom={"200px"}>
        <Navbar />
        <Breadcrumbs />
        <QuizResultStoreProvider>
          <CompareCoursesStoreProvider>
            <Component {...pageProps} />
          </CompareCoursesStoreProvider>
        </QuizResultStoreProvider>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
