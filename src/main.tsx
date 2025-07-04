import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <App />
  </StrictMode>
);
