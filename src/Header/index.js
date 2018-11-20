import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

import { getUser } from '../auth/selectors'
import { login, logout } from '../auth/reducer'

// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
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
  },
  google: {
    width: 24,
    height: 24,
    cursor: 'pointer',
    marginTop: 6
  }
})

class Header extends React.Component {
  render() {
    const { classes, user, login, logout } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MovieSearcher />
            <MovieSearch />
            <div className={classes.grow} />
            {!user && (
              <div onClick={() => login()}>
                <img
                  src="https://storage.googleapis.com/builderbook/G.svg"
                  alt="Log in with Google"
                  className={classes.google}
                />
              </div>
            )}
            {user && <ProfileIcon logout={logout} />}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: getUser(state) })
const mapDispatchToProps = { login, logout }
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(withStyles(styles)(Header))
