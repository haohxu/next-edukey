import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import "@fontsource/merriweather"
import type { AppProps } from "next/app";
import { Inter, Genos, Merriweather, Kelly_Slab, Henny_Penny} from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumbs";

import { QuizResultStoreProvider } from "@/context/QuizResultStore";
import { CompareCoursesStoreProvider } from "@/context/CompareCoursesStore";

const inter = Inter({ subsets: ["latin"] })
const genos = Genos({ subsets: ["latin"] })
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
})
const kelly_slab = Kelly_Slab({weight: ["400"] , subsets: ["latin"] });
// const henny_penny = Henny_Penny({weight: ["400"] , subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    heading: "Merriweather",
    body: "Merriweather",
    inter: inter.style.fontFamily,
    genos: genos.style.fontFamily,
    merriweather: merriweather.style.fontFamily,
    kelly_slab: kelly_slab.style.fontFamily,
    // henny_penny: henny_penny.style.fontFamily,
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
