import React from "react";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./screens/AboutPage";
import ContactUsPage from "./screens/ContactUsPage";
import ServiceDetailsPage from "./screens/ServiceDetailsPage";

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:serviceName" element={<ServiceDetailsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
