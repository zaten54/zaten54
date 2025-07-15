import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;