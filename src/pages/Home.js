import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../ducks/movies/reducer'
import { fetchFavorites } from '../ducks/favorites/reducer'
import { getMoviesWithLikes } from '../ducks/movies/selectors'
import MoviesList from '../Components/MoviesList'

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies({ path: 'movie/top_rated' })
    this.props.fetchFavorites() //to see like state after favorites loads
  }

  render() {
    return <MoviesList movies={this.props.movies} />
  }
}

const mapStateToProps = state => ({ movies: getMoviesWithLikes(state) })
const mapDispatchToProps = { fetchMovies, fetchFavorites }
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(Home)
