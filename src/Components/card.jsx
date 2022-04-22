export default function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      <label className="card-title"> {props.title} </label>
      <p className="card-desc">{props.desc} </p>
    </div>
  );
}
