export default function InputField(props) {
  return (
    <div className="input-container">
      <label className="input-label">{props.label}</label>
      <input className="input-field" {...props}></input>
    </div>
  );
}
