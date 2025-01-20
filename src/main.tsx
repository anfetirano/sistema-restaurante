import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import AppRoutes from "../src/Routes/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);