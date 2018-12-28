import React from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const styles = theme => ({
  title: {
    cursor: 'pointer',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
})

const MovieSearcher = ({ classes, push }) => {
  const linkToRoot = () => push('/')
  return (
    <Typography className={classes.title} variant="h6" color="inherit" noWrap onClick={linkToRoot}>
      Moviesearcher
    </Typography>
  )
}

MovieSearcher.defaultProps = {
  push: () => {},
  classes: {}
}

MovieSearcher.propTypes = {
  push: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.String)
}

export default withStyles(styles)(MovieSearcher)
