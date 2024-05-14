import React from "react";
import LandingPage from "./screens/LandingPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./screens/AboutPage";

export default function App(): React.JSX.Element {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
