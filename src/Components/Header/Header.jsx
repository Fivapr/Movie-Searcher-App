import React from 'react'
import { withStyles } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import MovieSearcher from './MovieSearcher'
import MovieSearch from './MovieSearch'
import Login from './Login'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  }
})

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MovieSearcher />
          <MovieSearch />
          <div className={classes.grow} />
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
}

Header.defaultProps = {
  classes: {}
}

export default withStyles(styles)(Header)
