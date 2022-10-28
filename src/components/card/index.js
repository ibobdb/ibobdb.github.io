import "./style.scss";

export default function index(props) {
  return (
    <div className="card">
      <div className="card-header">
        <span>{props.header}</span>
      </div>
      <div className="card-body">
        <img src={props.img} alt="" />
        <div className="desc">
          <div className="desc-item">
            <span>{props.header}</span>
            <p>{props.desc}</p>
            <div className="tag">
              <ul>
                {Array.from(props.tag).map((obj, index) => {
                  return <li key={index}>{obj}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer"></div>
    </div>
  );
}
