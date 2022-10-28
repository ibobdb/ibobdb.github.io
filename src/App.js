import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Blog from "./pages/blog";
import Contact from "./pages/contacts";
export default function App() {
  document.title = "Boby Nugraha Pratama";
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<LandingPage />}></Route> */}
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
