import "./style.scss";

export default function index() {
  return (
    <div className="hero min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <span className="hero-name">Boby Nugraha Pratama</span>
            <span className="hero-desc">
              Experienced 2 years in Web Development including Laravel, Node js,
              and React js
            </span>
            <a href="/projects" className="hero-button">
              See More
            </a>
            <ul className="social-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/bobynp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-linkedin"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://ibobdb.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-github"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ibobdb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="fa fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#link">
                  <span className="fa fa-twitter"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
