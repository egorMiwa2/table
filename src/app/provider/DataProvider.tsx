// ExampleFormDataContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the form data
export interface ExampleFormData {
  currency?: string;
  date?: Date | null;
  game?: string;
  gameProvider?: string;
  playerCount?: number;
  totalBet?: number;
  totalWin?: number;
  betsCount?: number;
  averageBet?: number;
  payout?: number;
}

// Define the context value's shape
interface ExampleFormDataContextType {
  exampleFormData: ExampleFormData[];
  updateExampleFormData: (newData: Partial<ExampleFormData>) => void;
  clearExampleFormData: () => void;
}

// Create context with an undefined initial value
const ExampleFormDataContext = createContext<
  ExampleFormDataContextType | undefined
>(undefined);

// Provider component props interface
interface ExampleFormDataProviderProps {
  children: ReactNode;
}

export const ExampleFormDataProvider: React.FC<
  ExampleFormDataProviderProps
> = ({ children }) => {
  const [exampleFormData, setExampleFormData] = useState<ExampleFormData[]>([]);

  const updateExampleFormData = (newData: Partial<ExampleFormData>) => {
    setExampleFormData((prevData) => prevData.concat(newData));
  };

  const clearExampleFormData = () => {
    setExampleFormData([]);
  };

  return (
    <ExampleFormDataContext.Provider
      value={{ exampleFormData, updateExampleFormData, clearExampleFormData }}
    >
      {children}
    </ExampleFormDataContext.Provider>
  );
};

// Custom hook to use the ExampleFormData context
export const useExampleFormDataContext = (): ExampleFormDataContextType => {
  const context = useContext(ExampleFormDataContext);
  if (context === undefined) {
    throw new Error(
      "useExampleFormDataContext must be used within a ExampleFormDataProvider",
    );
  }
  return context;
};
