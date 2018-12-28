import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MovieCard from './MovieCard'
import { fromJS } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

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

    return (
      <div className={classes.container}>
        {movies.map(movie => (
          <MovieCard key={movie.get('id')} movie={movie} />
        ))}
      </div>
    )
  }
}

MoviesList.defaultProps = {
  movies: fromJS([]),
  classes: {}
}

MoviesList.propTypes = {
  movies: ImmutablePropTypes.list,
  classes: PropTypes.objectOf(PropTypes.string)
}

export default withStyles(styles)(MoviesList)
