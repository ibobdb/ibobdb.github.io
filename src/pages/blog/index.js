import "./style.scss";
import Navbar from "../../components/navbar";
import Ball from "../../components/ball";
import PageHeader from "../../components/page-header";

import Footer from "../../components/footer";
export default function index() {
  return (
    <div className="blog">
      <Navbar />
      <PageHeader title="Comming Soon..... :D" />
      <Ball />
      <Footer />
    </div>
  );
}
