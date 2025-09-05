import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "@/dev";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
    </HelmetProvider>
  </StrictMode>,
);
