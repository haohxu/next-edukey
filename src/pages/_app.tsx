import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Inter, Genos } from "next/font/google";
import { createContext, ReactNode, useContext, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });
const genos = Genos({ subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    inter: inter.style.fontFamily,
    genos: genos.style.fontFamily,
  },
});

// BEGIN: Context for quiz result
interface IQuizResult {}

type QuizResultType = {
  quizResultResponse: IQuizResult[];
  setQuizResultResponse: any;
};

export const QuizResultStoreContext = createContext<QuizResultType | null>(
  null
);

export const useQuizResultStore = () => {
  const context = useContext(QuizResultStoreContext);
  if (!context) {
    throw new Error("useStore must be used within ");
  }
  return context;
};

export const QuizResultStoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [quizResultResponse, setQuizResultResponse] = useState<IQuizResult[]>(
    []
  );

  return (
    <QuizResultStoreContext.Provider
      value={{ quizResultResponse, setQuizResultResponse }}
    >
      {children}
    </QuizResultStoreContext.Provider>
  );
};
// END

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight={"100vh"} position={"relative"} paddingBottom={"200px"}>
        <Navbar />
        <Breadcrumbs />
        <QuizResultStoreProvider>
          <Component {...pageProps} />
        </QuizResultStoreProvider>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
