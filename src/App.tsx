import React from "react";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./screens/AboutPage";
import ContactUsPage from "./screens/ContactUsPage";
import ServiceDetailsPage from "./screens/ServiceDetailsPage";
import CareersPage from "./screens/CareersPage";
import BlogPage from "./screens/BlogPage";
import BlogPostDetail from "./components/BlogPostDetail"; 
import GetStarted from "./screens/GetStarted";
import { Toaster } from "react-hot-toast";

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:serviceName" element={<ServiceDetailsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<BlogPostDetail />}/>
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}
