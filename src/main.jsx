import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./main.css";
import Layout from "./Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
