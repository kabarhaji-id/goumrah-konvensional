import { createContext, useContext, useState, ReactNode } from "react";

interface FAQSearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Create context with default values
const FAQSearchContext = createContext<FAQSearchContextType | undefined>(undefined);

interface FAQSearchProviderProps {
  children: ReactNode;
}

// Provider component with proper typing
export const FAQSearchProvider: React.FC<FAQSearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <FAQSearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </FAQSearchContext.Provider>
  );
};

// Custom hook to use FAQSearch context
export const useFAQSearch = () => {
  const context = useContext(FAQSearchContext);
  if (!context) {
    throw new Error("useFAQSearch must be used within an FAQSearchProvider");
  }
  return context;
};
