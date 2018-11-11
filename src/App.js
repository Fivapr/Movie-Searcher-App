import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = { value: '', movies: [] }
  onChange = e => this.setState({ value: e.target.value })

  componentDidMount() {
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=59017ce86d5101576f32f47160168519')
      .then(res => this.setState({ movies: res.data.results }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <input value={this.state.value} onChange={this.onChange} />
        {this.state.movies.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </>
    )
  }
}

export default App
