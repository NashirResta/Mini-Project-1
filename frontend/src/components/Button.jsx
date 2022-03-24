import React from "react";
import "./#Component.css";

const Button = props => {
  const { children, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {children || "button?"}
    </button>
  );
};

export default Button;
