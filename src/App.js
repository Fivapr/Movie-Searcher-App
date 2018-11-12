import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import api from './utils/api'
import MovieCard from './Components/MovieCard'
import Input from './Components/Input'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

class App extends Component {
  state = { value: '', movies: [] }

  componentDidMount() {
    api('movie/top_rated')
      .then(res => this.setState({ movies: res.data.results }))
      .catch(err => console.log(err))
  }

  onChange = e =>
    this.setState({ value: e.target.value }, () =>
      api(`search/movie`, { query: this.state.value })
        .then(res => this.setState({ movies: res.data.results }))
        .catch(err => console.log(err))
    )

  render() {
    const { classes } = this.props

    return (
      <>
        <Input value={this.state.value} onChange={this.onChange} />
        <div className={classes.container}>
          {this.state.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    )
  }
}

export default withStyles(styles)(App)
