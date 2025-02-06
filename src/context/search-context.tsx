"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface FAQSearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FAQSearchContext = createContext<FAQSearchContextType | undefined>(undefined);

interface FAQSearchProviderProps {
  children: ReactNode;
}

export const FAQSearchProvider: React.FC<FAQSearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <FAQSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FAQSearchContext.Provider>
  );
};

export const useFAQSearch = () => {
  const context = useContext(FAQSearchContext);
  if (!context) {
    throw new Error("useFAQSearch must be used within a FAQSearchProvider");
  }
  return context;
};