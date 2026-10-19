import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import "./styles.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppRoutes from "./routes";

// React.StrictMode's development-mode double-invoke behavior can cause a
// single real click to fire its handler twice, which Playwright's network
// mocking can't tell apart from a genuine double-request bug - skip it only
// for e2e runs (see playwright.config.ts's webServer env), not local dev.
const StrictModeOrFragment = import.meta.env.VITE_E2E === "true" ? React.Fragment : React.StrictMode;

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictModeOrFragment>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </StrictModeOrFragment>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
