import React from 'react'
import PropTypes from 'prop-types'
import firebase from '../utils/firebase'
import { withStyles } from '@material-ui/core'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
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
  state = { user: null }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
  }

  render() {
    const { classes } = this.props
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MovieSearcher />
            <MovieSearch />
            <div className={classes.grow} />
            {!this.state.user && (
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            )}
            {this.state.user && (
              <div>
                <ProfileIcon />
              </div>
            )}
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
