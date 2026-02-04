import * as React from 'react';
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { DeviceProvider } from './app/device/DeviceContext';

createRoot(document.getElementById("root")!).render(
  <DeviceProvider>
    <App />
  </DeviceProvider>
);
