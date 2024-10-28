import { createContext, ReactNode } from 'react'

export const AppContext = createContext({});


interface AppContextProviderProps {
  children: ReactNode;
}

export default function AppContextProvider({ children }: AppContextProviderProps) {
  const value = {};

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}
