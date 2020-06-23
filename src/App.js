import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './default/Navbar'
import Home from './components/Home'
import Game from './components/Game'
import HighScores from './components/HighScores'

class App extends React.Component{
  render(){
    return (
      <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/highscores" component={HighScores} />
      </Switch>
      </>
    )
  }
}

export default App