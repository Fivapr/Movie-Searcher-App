import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
