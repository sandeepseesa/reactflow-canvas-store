import React, { createContext, useState, ReactNode } from 'react';

type GlobalContextType = {
  [key: string]: any;
  setValue: (key: string, value: any) => void;
};

export const GlobalStoreContext = createContext<GlobalContextType | null>(null);

export const GlobalStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store, setStore] = useState<{ [key: string]: any }>({});

  const setValue = (key: string, value: any) => {
    setStore(prev => ({ ...prev, [key]: value }));
  };

  return (
    <GlobalStoreContext.Provider value={{ ...store, setValue }}>
      {children}
    </GlobalStoreContext.Provider>
  );
};
