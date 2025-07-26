const canvasStores: Record<string, Record<string, any>> = {};

//non-reactive store
export const getCanvasStore = (canvasId: string, key: string) => {
  return canvasStores[canvasId]?.[key];
};

export const setCanvasStore = (canvasId: string, key: string, value: any) => {
  if (!canvasStores[canvasId]) {
    canvasStores[canvasId] = {};
  }
  canvasStores[canvasId][key] = value;
};

export const updateCanvasStore = (canvasId: string, key: string, value: any) => {
  if (!canvasStores[canvasId]) {
    throw new Error(`No store found for canvasId "${canvasId}"`);
  }
  if (!(key in canvasStores[canvasId])) {
    throw new Error(`Key "${key}" does not exist in canvasId "${canvasId}"`);
  }
  canvasStores[canvasId][key] = value;
}

export const resetCanvasStore = (canvasId: string) => {
  if (canvasStores[canvasId]) {
    canvasStores[canvasId] = {};
    }
}


