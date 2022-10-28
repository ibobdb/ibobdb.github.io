import "./style.scss";
import Navbar from "../../components/navbar";
import Ball from "../../components/ball";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
export default function index() {
  return (
    <div className="Contact">
      <Navbar />
      <PageHeader title="Contact" />
      <div className="contact-content">
        <div className="container">
          <div className="element-list">
            <span className="title">Get my email</span>
            <span className="value">bobynugraha19@gmail.com</span>
          </div>
          <div className="element-list">
            <span className="title">Or Send message</span>
            <form action="" className="form-send-message">
              <input
                type="text"
                className="form-field"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="form-field"
                placeholder="Your Email"
              />
              <textarea
                id="txtid"
                name="txtname"
                rows="12"
                cols="100"
                maxlength="200"
                className="form-field"
                placeholder="Write here"
              ></textarea>
              <button
                className="btn-send"
                onClick={(e) => {
                  alert("This services not available now.");
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <Ball />
    </div>
  );
}
