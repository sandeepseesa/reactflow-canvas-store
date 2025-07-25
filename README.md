# reactflow-canvas-store

Global and per-canvas state management solution for [React Flow](https://reactflow.dev/) projects using TypeScript and React Context.

---

## ✨ Features

- ✅ Global store shared across all canvases.
- ✅ Canvas-level isolated store with `canvasId` scoping.
- ✅ React Context + hooks for reactive updates.
- ✅ Simple API for imperative or hook-based access.
- ✅ Written in 100% TypeScript.

---

## 📦 Installation

```bash
npm install reactflow-canvas-store

Make sure to also install React as a peer dependency:

```bash
npm install react react-dom
```

## 🚀 Usage

### 🔸 1. Wrap your app with Providers

```tsx
import {
  GlobalStoreProvider,
  CanvasStoreProvider,
} from 'reactflow-canvas-store';

function App() {
  return (
    <GlobalStoreProvider>
      <CanvasStoreProvider>
        <YourReactFlowApp />
      </CanvasStoreProvider>
    </GlobalStoreProvider>
  );
}
```

### 🔸 2. Using Global Store

```tsx
import { useGlobalStore } from 'reactflow-canvas-store';

function SettingsPanel() {
  const [theme, setTheme] = useGlobalStore<string>('theme');

  return (
    <button onClick={() => setTheme('dark')}>Set Dark Mode</button>
  );
}
```

### 🔸 3. Using Canvas Store (per canvasId)

```tsx
import { useCanvasStore } from 'reactflow-canvas-store';

function CanvasNode({ canvasId }: { canvasId: string }) {
  const [nodes, setNodes] = useCanvasStore<any[]>(canvasId, 'nodes');

  return (
    <button onClick={() => setNodes([...nodes, { id: 'new' }])}>
      Add Node
    </button>
  );
}
```
⚠️ Use (nodes || []) to avoid errors on initial undefined.


###🔸 4. Imperative Access (without hooks)

```ts
import {
  setGlobalStore,
  getGlobalStore,
  setCanvasStore,
  getCanvasStore,
} from 'reactflow-canvas-store';

setGlobalStore('language', 'en');
console.log(getGlobalStore('language')); // 'en'

setCanvasStore('canvas1', 'edges', []);
console.log(getCanvasStore('canvas1', 'edges'));
```

## 📚 API 
| Function              | Description                              |
| --------------------- | ---------------------------------------- |
| `useGlobalStore()`    | Reactive global state hook               |
| `getGlobalStore()`    | Non-reactive global getter               |
| `setGlobalStore()`    | Global setter                            |
| `useCanvasStore(id)`  | Reactive canvas-specific hook            |
| `getCanvasStore(id)`  | Non-reactive canvas-specific getter      |
| `setCanvasStore(id)`  | Canvas-specific setter                   |
| `GlobalStoreProvider` | Wraps app for global context             |
| `CanvasStoreProvider` | Wraps a canvas and provides scoped store |


## 📂 Folder Structure
```css
src/
  global/
    globalStore.ts
    GlobalStoreProvider.tsx
    useGlobalStore.ts
  canvas/
    canvasStore.ts
    CanvasStoreProvider.tsx
    useCanvasStore.ts
  index.ts
```

## 📜 License
MIT © Seesa Sandeep Kumar

