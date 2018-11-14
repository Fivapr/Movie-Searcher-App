import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { fetchMovies } from './reducer'
import { getMovies } from './selector'

import MovieCard from './Components/MovieCard'
import Input from './Components/Input'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

class Home extends Component {
  state = { value: '' }

  componentDidMount() {
    this.props.fetchMovies({ path: 'movie/top_rated' })
  }

  onChange = e =>
    this.setState({ value: e.target.value }, () =>
      this.props.fetchMovies({
        path: `search/movie`,
        params: { query: this.state.value }
      })
    )

  render() {
    const { movies, classes } = this.props

    return (
      <>
        <Input value={this.state.value} onChange={this.onChange} />
        <div className={classes.container}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({ movies: getMovies(state) })
const mapDispatchToProps = { fetchMovies }
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  withStyles(styles)
)(Home)
