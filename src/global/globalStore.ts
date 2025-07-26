// A simple internal store object
const globalState: Record<string, any> = {};

//non-reactive store
export const getGlobalState = (key: string) => globalState[key];
export const setGlobalState = (key: string, value: any) => {
  globalState[key] = value;
};

export const updateGlobalState = (key: string, value: any) => {
  if (!(key in globalState)) {
    throw new Error(`Key "${key}" does not exist in global store`);
  }
  globalState[key] = value;
};

export const resetGlobalState = () => {
  for (const key in globalState) {
    delete globalState[key];
  }
};

export const hasGlobalState = (key: string) => key in globalState;

export const getAllGlobalState = () => ({ ...globalState });

export const clearGlobalState = () => {
  for (const key in globalState) {
    delete globalState[key];
  }
};

export const getGlobalStateKeys = () => Object.keys(globalState);

export const getGlobalStateValues = () => Object.values(globalState);

export const getGlobalStateEntries = () => Object.entries(globalState);

export const setGlobalStateEntries = (entries: [string, any][]) => {
  entries.forEach(([key, value]) => {
    globalState[key] = value;
  });
};

export const updateGlobalStateEntries = (entries: [string, any][]) => {
  entries.forEach(([key, value]) => {
    if (!(key in globalState)) {
      throw new Error(`Key "${key}" does not exist in global store`);
    }
    globalState[key] = value;
  });
};

export const resetGlobalStateEntries = (keys: string[]) => {
  keys.forEach(key => {
    if (key in globalState) {
      delete globalState[key];
    } else {
      throw new Error(`Key "${key}" does not exist in global store`);
    }
  });
};

export const hasGlobalStateEntries = (keys: string[]) => {
  return keys.every(key => key in globalState);
};

