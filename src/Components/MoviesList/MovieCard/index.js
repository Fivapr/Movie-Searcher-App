import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

import { toggleFavorite } from '../../../ducks/favorites/reducer'
import styles from './styles'

import MovieCard from './MovieCard'

const mapDispatchToProps = { toggleFavorite }
const withConnect = connect(
  null,
  mapDispatchToProps
)

export default withConnect(withStyles(styles)(MovieCard))
