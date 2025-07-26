import React, { createContext, useState, ReactNode } from 'react';

type CanvasStoreContextType = {
  store: Record<string, Record<string, any>>;
  setCanvasValue: (canvasId: string, key: string, value: any) => void;
};

export const CanvasStoreContext = createContext<CanvasStoreContextType | null>(null);

export const CanvasStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store, setStore] = useState<Record<string, Record<string, any>>>({});

  const setCanvasValue = (canvasId: string, key: string, value: any) => {
    setStore(prev => ({
      ...prev,
      [canvasId]: {
        ...(prev[canvasId] || {}),
        [key]: value,
      },
    }));
  };

  return (
    <CanvasStoreContext.Provider value={{store, setCanvasValue}}>
      {children}
    </CanvasStoreContext.Provider>
  );
};
