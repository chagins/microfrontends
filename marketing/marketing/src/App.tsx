import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Pricing } from "./components";
import "./app.scss";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
