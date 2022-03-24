import React from "react";
import "./#Component.css";

const Input = props => {
  return (
    <div>
      <input
        value={props.value}
        onChange={e => {
          props.onChange(e.target.value);
        }}
        className={props.editInput || "input"}
        type={props.type}
        name={props.names}
        placeholder={props.placeholder}
        {...props.register}
      />
    </div>
  );
};

export default Input;
