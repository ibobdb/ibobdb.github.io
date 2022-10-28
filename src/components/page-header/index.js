import "./style.scss";

export default function index(props) {
  return (
    <div className="container">
      <div className="page-header">
        <span>{props.title}</span>
      </div>
    </div>
  );
}
