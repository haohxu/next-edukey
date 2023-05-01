import { course } from "@prisma/client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ICompareCourses {}

type CompareCoursesType = {
  compareCoursesResponse: course[];
  setCompareCoursesResponse: any;
};

export const CompareCoursesStoreContext = createContext<CompareCoursesType | null>(
  null
);

export const useCompareCoursesStore = () => {
  const context = useContext(CompareCoursesStoreContext);
  if (!context) {
    throw new Error("useStore must be used within ");
  }
  return context;
};

export const CompareCoursesStoreProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [compareCoursesResponse, setCompareCoursesResponse] = useState<course[]>(
    []
  );

  return (
    <CompareCoursesStoreContext.Provider
      value={{ compareCoursesResponse, setCompareCoursesResponse }}
    >
      {children}
    </CompareCoursesStoreContext.Provider>
  );
};
