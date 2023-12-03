import React from "react";
import { createRoot } from "react-dom/client";

export const mount = (rootElement: HTMLElement) => {
  const root = createRoot(rootElement);
  root.render(<h1>Marketing MFE</h1>);
};

if (process.env.NODE_ENV === "development") {
  const devRootElement = document.getElementById("marketing-dev-root");

  if (devRootElement) {
    mount(devRootElement);
  }
}
