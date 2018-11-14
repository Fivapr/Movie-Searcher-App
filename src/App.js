import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </>
    )
  }
}

export default App
