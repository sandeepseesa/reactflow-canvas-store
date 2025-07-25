import { useContext } from 'react';
import { CanvasStoreContext } from './CanvasStoreProvider';

export function useCanvasStore<T>(canvasId: string, key: string): [T | undefined, (value: T) => void] {
  const context = useContext(CanvasStoreContext);

  if (!context) {
    throw new Error('useCanvasStore must be used within a CanvasStoreProvider');
  }

  const canvas = context[canvasId];
  if (!canvas) {
    throw new Error(`No store found for canvasId "${canvasId}"`);
  }

  const value = canvas[key];
  const setValue = (val: T) => {
    canvas.setValue(key, val);
  };

  return [value, setValue];
}
