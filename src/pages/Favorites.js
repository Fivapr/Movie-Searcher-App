import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFavorites } from '../MoviesList/reducer'
import { getFavorites } from '../MoviesList/selectors'
import MoviesList from '../MoviesList'

class Favorite extends Component {
  componentDidMount() {
    this.props.fetchFavorites()
  }

  render() {
    return <MoviesList movies={this.props.favorites} />
  }
}

const mapStateToProps = state => ({ favorites: getFavorites(state) })
const mapDispatchToProps = { fetchFavorites }
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(Favorite)
