import { createContext, ReactNode, useContext, useState } from "react";

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
