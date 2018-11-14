import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import MovieSearcher from './MovieSearcher'
import MovieSearch from './MovieSearch'
import ProfileIcon from './ProfileIcon'

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  }
})

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MovieSearcher />
            <MovieSearch />
            <div className={classes.grow} />
            <ProfileIcon />
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
