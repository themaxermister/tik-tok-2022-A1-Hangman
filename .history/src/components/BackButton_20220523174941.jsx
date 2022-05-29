import React, { Component } from "react";

const BackButton = () => {
  render() {
    return (
      <div class="icon">
        <div class="back-arrow-button"></div>
      </div>
    );
  };
};

const BackButton = ({ id, type, text }) => {
    //console.log("CustomButton - Rendered");
  
    return (
      <React.Fragment>
        <button id={id} className={getButtonType(type)}>{text}</button>
      </React.Fragment>
    );
  };

export default BackButton;
