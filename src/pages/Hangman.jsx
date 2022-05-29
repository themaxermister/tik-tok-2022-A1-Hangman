import React, { Component } from "react";
import { randomWord } from "../components/Words.jsx";
import img1 from "../components/images/4.jpg";
import img2 from "../components/images/5.jpg";
import img3 from "../components/images/6.jpg";
import img4 from "../components/images/7.jpg";
import img5 from "../components/images/8.jpg";
import img6 from "../components/images/9.jpg";
import img7 from "../components/images/10.jpg";


class Hangman extends Component {
    static defaultProps = {
      maxWrong: 6,
      images: [img1, img2, img3, img4, img5, img6, img7]
    }
  
    constructor(props) {
      super(props);
      this.state = {
        mistake: 0,
        guessed: new Set([]),
        answer: randomWord()
      }
    }
  
    handleGuess = guess => {
      let letter = guess.target.value;
      this.setState(state => ({
        guessed: state.guessed.add(letter),
        mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1)
      }));
    }
  
    guessedWord() {
      return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }
  
    generateButtons() {
      return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button
          className='btn btn-lg btn-primary m-2'
          key={letter}
          value={letter}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(letter)}
        >
          {letter}
        </button>
      ));
    }
  
    resetButton = () => {
      this.setState({
        mistake: 0,
        guessed: new Set([]),
        answer: randomWord()
      });
    }
  
    render() {
      const gameOver = this.state.mistake >= this.props.maxWrong;
      const isWinner = this.guessedWord().join("") === this.state.answer;
      let gameStat = this.generateButtons();
      

      if (gameOver) {
        gameStat = "You Lost!"
      }
      
      if (isWinner) {
        gameStat = "You Won!"
      }
  
      return (
        <div className="Hangman container">
          <h1 className='text-center'>Hangman - Guess the fruit</h1>
          <div className="text-left">
            <img src={this.props.images[this.state.mistake]} alt=""/>
          </div>
          <div className="text-center">
              {!gameOver ? this.guessedWord() : this.state.answer}
            <p>{gameStat}</p>
            <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
          </div>
        </div>
      )
    }
  }
  
  export default Hangman;
