import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
