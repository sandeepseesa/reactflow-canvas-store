// A simple internal store object
const globalState: Record<string, any> = {};

export const getGlobalStore = (key: string) => globalState[key];
export const setGlobalStore = (key: string, value: any) => {
  globalState[key] = value;
};
