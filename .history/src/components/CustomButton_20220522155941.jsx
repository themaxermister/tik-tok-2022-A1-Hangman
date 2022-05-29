import React from "react";

const getButtonType = (type) => {
  if (type === "pri") {
    return "btn btn-primary btn-lg";
  } else if (type === "sec") {
    return "btn btn-secondary btn-lg";
  }
  return "none";
};

const CustomButton = ({ type, text }) => {
  console.log("CustomButton - Rendered");

  return (
    <React.Fragment>
      <button className={getButtonType(type)}>{text}</button>
    </React.Fragment>
  );
};

export default CustomButton;
