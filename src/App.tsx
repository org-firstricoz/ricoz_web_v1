import React from "react";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./screens/AboutPage";

export default function App(): React.JSX.Element {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
