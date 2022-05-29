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
        <div class="icon">
        <div class="back-arrow-button"></div>
      </div>
      </React.Fragment>
    );
  };

export default BackButton;
