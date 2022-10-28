import "./style.scss";

export default function index() {
  return (
    <div className="hero">
      <div className="container">
        <span className="hero-name">Boby Nugraha Pratama</span>
        <span className="hero-desc">
          Experienced 2 years in Web Development including Laravel, Node js, and
          React js
        </span>
        <button type="button" className="hero-button">
          See More
        </button>
        <ul className="social-list">
          <li>
            <a href="https://www.linkedin.com/in/bobynp" target="_blank">
              <span className="fa fa-linkedin"></span>
            </a>
          </li>
          <li>
            <a href="https://ibobdb.github.io/" target="_blank">
              <span className="fa fa-github"></span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ibobdb/" target="_blank">
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
  );
}
