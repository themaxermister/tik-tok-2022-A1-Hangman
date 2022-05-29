import React, { Component } from "react";

class Start extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <CustomButton type="pri" text="Play" />
        <CustomButton type="sec" text="Leaderboards" />
      </React.Fragment>
    );
  }
}

export default Start;
