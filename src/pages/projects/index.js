import Ball from "../../components/ball";
import PageHeader from "../../components/page-header";
import Card from "../../components/card";
import Footer from "../../components/footer";
import HallDashboard from "../../assets/img/hall-dashboard.png";
import Boby from "../../assets/img/boby.png";
import Ecommerce from "../../assets/img/cart.png";
import FnbKasir from "../../assets/img/FnBKasir.png";
import LoginStisla from "../../assets/img/login-stisla.png";
import Ibob from "../../assets/img/ibob-port.png";
import Apriori from "../../assets/img/apriori.png";
import UndanganMantan from "../../assets/img/p-1.png";
import DiscordBot from "../../assets/img/discord.png";
import "./style.scss";
export default function index() {
  return (
    <div className="projects">
      {/* Main Content Home */}
      <PageHeader title="Projects" />
      <div className="container">
        <div className="row card-list px-5">
          <div className="col-md-4 mb-3">
            <Card
              header="Landing Page"
              img={UndanganMantan}
              desc="
              Landing page for web application to create Digital Invitation
              "
              tag={["laravel", "Javascript"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Personal Website"
              img={Boby}
              desc="
            Portfolio website for personal branding
            "
              tag={["React Js", "Figma"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Coffe Shop Inventory"
              img={HallDashboard}
              desc={"Website for Coffe Shop inventory"}
              tag={["Laravel", "Javascript"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="FnB App"
              img={FnbKasir}
              desc={"Web App for FnB reservation and management"}
              tag={["Laravel", "Javascript"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Ecommerce"
              img={Ecommerce}
              desc={
                "This is Ecommerce website, nothing special here its same like other ecommerce :D"
              }
              tag={["Larvel"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Music BOT Discord"
              img={DiscordBot}
              desc={
                "Discord Bot for playing music on discord channel, this use Youtube API"
              }
              tag={["Node Js", "Youtube API"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Laravel Stisla"
              img={LoginStisla}
              desc={
                "Laravel stisla is laravel packages for create authentication quickly using stisla theme"
              }
              tag={["Laravel"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Personal Website"
              img={Ibob}
              desc={"  Portfolio website for personal branding"}
              tag={["Html", "CSS", "Javascript"]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <Card
              header="Data mining"
              img={Apriori}
              desc={"This is data mining web app using apriori algorithm "}
              tag={["Laravel", "Javascript"]}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Ball />
    </div>
  );
}
