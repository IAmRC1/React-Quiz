import React from 'react'
import questions from '../questions.json';
import Question from './Question.js'

class Game extends React.Component {

  state = {
    quiz: questions,
    index: 0,
    numberOfQuestions: questions.length,
    score: 0,
    completed: false
  }

  checkAnswer = (answer, i) => {
    if(this.state.index + 1 === this.state.numberOfQuestions){
      this.setState({ completed: true })
    }
    if(answer.point === 1){
      this.setState({
        score: this.state.score + 2
      })
    } else {
      this.setState({
        score: this.state.score - 0.66,
      })
    }
    this.setState({index: this.state.index + 1})
  }

  render() {
    const result = Math.floor(this.state.score*100)/100;
    return (
      <div className="home-wrapper game-wrapper">
        {!this.state.completed && <div className="score-wrapper">SCORE : <span>{result}</span></div>}
        {/* <div className="timer-wrapper"><span>15</span></div> */}
        {this.state.completed 
        ? <div>
            <h4>Congratulations, you finished the quiz</h4>
            <h2 className="text-center">Your score is {result}</h2>
          </div>
        : <>
            <div className="question-wrapper">
              {(this.state.quiz && this.state.index < this.state.quiz.length)
              ? <Question
                  question={this.state.quiz[this.state.index]}
                  index={this.state.index}
                  checkAnswer={this.checkAnswer}
                  onSubmit={this.handleSubmit}
                />
              : ''
              }
            </div>
            {this.state.index < this.state.numberOfQuestions && <div className="question-num-wrapper">{`Question ${this.state.index+1}/${this.state.numberOfQuestions}`}</div>}
          </>
        }
      </div>
    )
  }
}

export default Game;