import MovieSearch from './MovieSearch'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../ducks/movies/reducer'

export default connect(
  null,
  { fetchMovies }
)(MovieSearch)
