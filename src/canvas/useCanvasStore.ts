import { useContext, useEffect } from 'react';
import { CanvasStoreContext } from './CanvasStoreProvider';

//reactive store
export function useCanvasStore<T>(canvasId: string, key: string): [T | undefined, (value: T) => void] {
  const context = useContext(CanvasStoreContext);

  if (!context) {
    throw new Error('useCanvasStore must be used within a CanvasStoreProvider');
  }

  const { store, setCanvasValue } = context;
  const canvas = store[canvasId] || {};

  const value = canvas[key];

  // Auto-initialize the canvasId and key if not set
  useEffect(() => {
    if (!(canvasId in store)) {
      setCanvasValue(canvasId, key, undefined);
    } else if (!(key in store[canvasId])) {
      setCanvasValue(canvasId, key, undefined);
    }
  }, [canvasId, key]);

  const setValue = (val: T) => {
    setCanvasValue(canvasId, key, val);
  };

  return [value, setValue];
}

