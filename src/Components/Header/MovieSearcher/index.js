import MovieSearcher from './MovieSearcher'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

export default connect(
  null,
  { push }
)(MovieSearcher)
