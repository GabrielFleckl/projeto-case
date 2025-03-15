import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeProvider/Index.tsx";
import { Toaster } from "@/components/ui/sonner"
import App from "./App.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
      <Toaster/>
    </ThemeProvider>
  </StrictMode>
);
