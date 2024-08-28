import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DarkModeProvider } from "./DarkModeContext";
import { ScrollAnimationProvider } from "./ScrollAnimationContext";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <DarkModeProvider>
      <ScrollAnimationProvider>
        <App />
      </ScrollAnimationProvider>
    </DarkModeProvider>
  </>
);
