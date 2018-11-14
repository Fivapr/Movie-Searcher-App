import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import api from '../utils/api'
import MovieCard from './Components/MovieCard'
import Input from './Components/Input'
import { connect } from 'react-redux'
import { fetchMovies } from './reducer'
import { compose } from 'redux'
import { getMovies } from './selector'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

class Home extends Component {
  state = { value: '' }

  componentDidMount() {
    this.props.fetchMovies({ path: 'movie/top_rated' })
  }

  onChange = e =>
    this.setState({ value: e.target.value }, () =>
      this.props.fetchMovies({
        path: `search/movie`,
        params: { query: this.state.value }
      })
    )

  render() {
    const { movies, classes } = this.props

    return (
      <>
        <Input value={this.state.value} onChange={this.onChange} />
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
