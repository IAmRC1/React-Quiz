import React, { Component } from 'react'

export default class Question extends Component {
  render() {
    return (
      <>
        <h2>{this.props.question.question}</h2>
        <div className="choices-wrapper">
          {this.props.question.answers.map((answer, i) => (
            <div key={i} className='choice-container col' onClick={() => this.props.checkAnswer(answer, i)}>
              <span className="choice-text">{answer.label}</span>
            </div>
          ))}
        </div>
      </>
    )
  }
}
