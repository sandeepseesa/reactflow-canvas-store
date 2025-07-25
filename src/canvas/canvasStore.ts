const canvasStores: Record<string, Record<string, any>> = {};

export const getCanvasStore = (canvasId: string, key: string) => {
  return canvasStores[canvasId]?.[key];
};

export const setCanvasStore = (canvasId: string, key: string, value: any) => {
  if (!canvasStores[canvasId]) {
    canvasStores[canvasId] = {};
  }
  canvasStores[canvasId][key] = value;
};
