import React from "react";

const getButtonType = (type) => {
  // Change with Kenny's CSS class codes
  if (type === "pri") {
    return "btn btn-primary btn-lg";
  } else if (type === "sec") {
    return "btn btn-secondary btn-lg";
  }
  return "none";
};

const getButtonClick = (onClick) => {
  if (onClick === "None"){
    return null;
  }
  return "onClick={onClick}";
}

const CustomButton = ({ id, type, text, onClick }) => {
  //console.log("CustomButton - Rendered");

  return (
    <React.Fragment>
      <button id={id} className={getButtonType(type)} {getButtonClick(onClick)}>{text}</button>
    </React.Fragment>
  );
};

export default CustomButton;
