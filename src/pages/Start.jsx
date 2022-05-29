import React, { Component } from "react";
import $ from 'jquery';
import CustomButton from "../components/CustomButton";
import { randomWord } from "../components/Words";
class Start extends Component {
  startGame = () => {
    $("#play-button").on('click', function(){
      window.location.href = "/game";
    })
  }

  render() {
    return (
      <main id="start-page">
          <div id="start-title">Hangman</div>
          <div id="button-row" className="hrow">
            <CustomButton key="1" id="play-button" type="pri" text="Play" onClick={this.startGame}/>
          </div>
      </main>
    );
  }
}

export default Start;
