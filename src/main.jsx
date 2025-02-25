import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import '@ant-design/v5-patch-for-react-19';
import { AuthProvider } from "./context/AuthContext";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <AuthProvider>
          <Router/>
       </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
