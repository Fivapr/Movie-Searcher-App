import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFavorites } from '../ducks/favorites/reducer'
import { getFavorites } from '../ducks/favorites/selectors'
import MoviesList from '../Components/MoviesList'

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
