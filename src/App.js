import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorite} />
        </Switch>
      </>
    )
  }
}

export default App
