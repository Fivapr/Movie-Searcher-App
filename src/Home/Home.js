import React, { Component } from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { fetchMovies } from './reducer'
import { getMovies } from './selector'

import MovieCard from './Components/MovieCard'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies({ path: 'movie/top_rated' })
  }

  render() {
    const { movies, classes } = this.props

    return (
      <>
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
