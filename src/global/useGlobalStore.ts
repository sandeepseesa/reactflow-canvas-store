import { useContext } from 'react';
import { GlobalStoreContext } from './GlobalStoreProvider';

export function useGlobalStore<T>(key: string): [T | undefined, (value: T) => void] {
  const context = useContext(GlobalStoreContext);

  if (!context) {
    throw new Error('useGlobalStore must be used within a GlobalStoreProvider');
  }

  const value = context[key];
  const setValue = (val: T) => {
    context.setValue(key, val);
  };

  return [value, setValue];
}