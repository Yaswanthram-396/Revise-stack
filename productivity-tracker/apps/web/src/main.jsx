import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./components/context/auth";
import { ToastProvider } from "./components/context/toast/toast";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <CookiesProvider>
    <AuthProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AuthProvider>
  </CookiesProvider>,
  // </StrictMode>,
);
