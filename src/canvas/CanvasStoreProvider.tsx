import React, { createContext, useState, ReactNode } from 'react';

type CanvasStoreContextType = {
  [canvasId: string]: {
    [key: string]: any;
    setValue: (key: string, value: any) => void;
  };
};

export const CanvasStoreContext = createContext<CanvasStoreContextType | null>(null);

export const CanvasStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store, setStore] = useState<Record<string, Record<string, any>>>({});

  const setValue = (canvasId: string, key: string, value: any) => {
    setStore(prev => ({
      ...prev,
      [canvasId]: {
        ...(prev[canvasId] || {}),
        [key]: value,
      },
    }));
  };

  const contextValue: CanvasStoreContextType = {};

  Object.keys(store).forEach(canvasId => {
    contextValue[canvasId] = {
      ...store[canvasId],
      setValue: (key: string, value: any) => setValue(canvasId, key, value),
    };
  });

  return (
    <CanvasStoreContext.Provider value={contextValue}>
      {children}
    </CanvasStoreContext.Provider>
  );
};
