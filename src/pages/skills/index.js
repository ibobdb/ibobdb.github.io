import "./style.scss";
import Navbar from "../../components/navbar";
import Ball from "../../components/ball";
import PageHeader from "../../components/page-header";
import Card from "../../components/card";
import Footer from "../../components/footer";
export default function index() {
  return (
    <div className="skills">
      <Navbar />
      <PageHeader title="Skills" />
      <div className="container">
        <div className="skill-list">
          <div className="skill-element">
            <span className="skill-title">Html, Css, Javascript</span>
            <p className="skill-desc">
              I have more experience for this stack like create Landing Page,
              Company Profile, Personal Website, and other.
            </p>
          </div>
          <div className="skill-element">
            <span className="skill-title">PHP Laravel</span>
            <p className="skill-desc">
              I'am start with PHP since 2018, first time project i made
              Disccussion Forum Website for my collage class then i start learn
              Codeigniter and Laravel. I have been created many website use
              codeigniter and laravel like POS website, Inventory, Simple CMS,
              and other :D
            </p>
          </div>
          <div className="skill-element">
            <span className="skill-title">Node Js</span>
            <p className="skill-desc">
              My experience using Node Js is not as much as from Laravel, but i
              have strong basic in Javascript. I have been create some app use
              node js like Discord Bot, Inventory Management, and Backend API
              for Food Market App
            </p>
          </div>
          <div className="skill-element">
            <span className="skill-title">React Js</span>
            <p className="skill-desc">
              Same like Node Js, my experience on react js is not much but i
              really understand how react js works. This web created use React
              Js
            </p>
          </div>
          <div className="skill-element">
            <p className="skill-desc">
              I also use other technologies like Codeigniter,Electron Js ,
              Bootstrap, Python(Django), Git, Figma and other web stack/tools
            </p>
          </div>
        </div>
      </div>
      <Ball />
      <Footer />
    </div>
  );
}
