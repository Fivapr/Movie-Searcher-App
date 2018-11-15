import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../MoviesList/reducer'
import { getMovies } from '../MoviesList/selectors'
import MoviesList from '../MoviesList'

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies({ path: 'movie/top_rated' })
  }

  render() {
    return <MoviesList movies={this.props.movies} />
  }
}

const mapStateToProps = state => ({ movies: getMovies(state) })
const mapDispatchToProps = { fetchMovies }
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(Home)
