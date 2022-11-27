import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Library from "./pages/Library";
import Projects from "./pages/Projects";
import Error from "./pages/Projects";

const root = ReactDOM.createRoot(document.getElementById(
  "root"
) as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/library" element={<Library />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
