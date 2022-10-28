import React from "react";
import Navbar from "../../components/navbar";
import Ball from "../../components/ball";
import Hero from "../../components/hero";
import "./style.scss";
export default function index() {
  return (
    <div className="home">
      <Navbar />
      {/* Main Content Home */}
      <div className="home-content">
        <Hero />
      </div>
      <Ball />
    </div>
  );
}
