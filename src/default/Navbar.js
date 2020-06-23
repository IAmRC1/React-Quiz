import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-start" id="navbars">
          <Link className="logo mr-auto" to="/">Quizzie</Link>
          <ul className="navbar-nav align-items-end">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/game">PLAY</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/highscores">HIGH SCORES</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
