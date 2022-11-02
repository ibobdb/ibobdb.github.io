import React from "react";
import Ball from "../../components/ball";
import Hero from "../../components/hero";
import "./style.scss";
export default function index() {
  return (
    <div className="home">
      {/* Main Content Home */}
      <div className="home-content">
        <Hero />
      </div>
      <Ball />
    </div>
  );
}
