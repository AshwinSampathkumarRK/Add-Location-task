export default function Button(props) {
  return (
    <button className={`btn ${props.buttonClass}`} {...props}>
      {props.label}
    </button>
  );
}
