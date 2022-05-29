import React, { Component } from "react";
import CustomButton from "../components/CustomButton";

class Start extends Component {
  state = {};
  render() {
    return (
      <main id="start-page">
        <React.Fragment>
          <div id="start-title">Hangman</div>
          <div id="button-row" className="row">
            <CustomButton type="pri" text="Play" />
            <CustomButton type="sec" text="Leaderboards" />
          </div>
        </React.Fragment>
      </main>
    );
  }
}

export default Start;
