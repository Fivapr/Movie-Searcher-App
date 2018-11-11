import React, { Component } from 'react'

class App extends Component {
  state = { value: '' }
  onChange = e => this.setState({ value: e.target.value })

  render() {
    return (
      <>
        <input value={this.state.value} onChange={this.onChange} />
      </>
    )
  }
}

export default App
