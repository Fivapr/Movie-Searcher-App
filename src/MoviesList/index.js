import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import { addFavorite, deleteFavorite } from './reducer'
import { getMovies } from './selectors'
import MovieCard from './MovieCard'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

class MoviesList extends Component {
  render() {
    const { classes, movies, addFavorite, deleteFavorite } = this.props

    return (
      <div className={classes.container}>
        {movies.map(movie => {
          return (
            <MovieCard
              key={movie.get('id')}
              movie={movie}
              addFavorite={addFavorite}
              deleteFavorite={deleteFavorite}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('​state', state)
  console.log('​getMovies(state)', getMovies(state))
  console.log('​{ movies: getMovies(state) }', { movies: getMovies(state) })
  return { movies: getMovies(state) }
}
const mapDispatchToProps = { addFavorite, deleteFavorite }
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  withStyles(styles)
)(MoviesList)
