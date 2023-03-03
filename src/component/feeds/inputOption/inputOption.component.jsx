import React from "react";
import "./inputOption.style.scss";
const InputOptionComponent = ({Icon, title, color}) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} className="inputOption__icon"/>
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptionComponent;
