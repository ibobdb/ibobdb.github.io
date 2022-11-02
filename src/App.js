import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Blog from "./pages/blog";
import Contact from "./pages/contacts";
import Navbar from "./components/navbar";
export default function App() {
  document.title = "Boby Nugraha Pratama";
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<LandingPage />}></Route> */}
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}
