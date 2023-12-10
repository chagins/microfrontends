import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Pricing } from "./components";
import CssBaseline from "@mui/material/CssBaseline";
import "./app.scss";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
