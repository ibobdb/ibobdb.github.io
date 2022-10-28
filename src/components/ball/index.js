import React from "react";
import "./style.scss";
export default function index() {
  var balls = document.getElementsByClassName("ball");
  document.addEventListener("mousemove", (event) => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";
    for (var i = 0; i < 1; i++) {
      balls[i].style.left = x - 1000;
      balls[i].style.top = y - 1000;
      balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
  });
  return (
    <>
      {/* <div className="ball m-top-right" id="ball"></div> */}
      <div className="ball m-center" id="ball"></div>
      <div className="ball m-bottom-left" id="ball"></div>
    </>
  );
}
