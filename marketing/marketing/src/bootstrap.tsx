import { createRoot } from "react-dom/client";
import { App } from "./App";

export const mount = (rootElement: HTMLElement) => {
  const root = createRoot(rootElement);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const devRootElement = document.getElementById("marketing-dev-root");

  if (devRootElement) {
    mount(devRootElement);
  }
}
