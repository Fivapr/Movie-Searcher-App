import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
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
    const { classes, movies, addFavorite } = this.props

    return (
      <div className={classes.container}>
        {movies.map(movie => (
          <MovieCard key={movie.get('id')} movie={movie} addFavorite={addFavorite} />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(MoviesList)
