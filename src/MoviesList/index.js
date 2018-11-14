import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

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
    const { classes, movies } = this.props
    console.log('​MoviesList -> render -> movies', movies)

    return (
      <div className={classes.container}>
        {movies.map(movie => {
          console.log('​MoviesList -> render -> movie', movie)
          return <MovieCard key={movie.get('id')} movie={movie} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({ movies: getMovies(state) })
const withConnect = connect(
  mapStateToProps,
  null
)

export default compose(
  withConnect,
  withStyles(styles)
)(MoviesList)
