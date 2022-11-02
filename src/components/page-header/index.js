import "./style.scss";

export default function index(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header">
            <span>{props.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
