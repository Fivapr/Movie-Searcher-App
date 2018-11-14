import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../MoviesList/reducer'
import MoviesList from '../MoviesList'

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies({ path: 'movie/top_rated' })
  }

  render() {
    return <MoviesList />
  }
}

const mapDispatchToProps = { fetchMovies }
const withConnect = connect(
  null,
  mapDispatchToProps
)

export default withConnect(Home)
