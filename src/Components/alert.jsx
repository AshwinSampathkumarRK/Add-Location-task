import { useEffect, useState } from "react";

export default function Alert(props) {
  const [shouldShowAlert, toggleAlert] = useState(false);

  useEffect(() => {
    toggleAlert(props.show);

    setTimeout(() => {
      toggleAlert(false);
      props.onChange(shouldShowAlert);
    }, 3000);
  }, [props.show]);

  return (
    <div className="alert-container">
      {shouldShowAlert ? (
        <div className="alert">
          <strong>{props.title}!</strong> {props.message}
        </div>
      ) : null}
    </div>
  );
}
