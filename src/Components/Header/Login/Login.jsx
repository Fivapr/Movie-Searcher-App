import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import ProfileIcon from './ProfileMenu'

const styles = theme => ({
  google: {
    width: 24,
    height: 24,
    cursor: 'pointer',
    marginTop: 6
  }
})

const Login = ({ user, login, logout, classes }) =>
  user ? (
    <ProfileIcon user={user} logout={logout} />
  ) : (
    <img
      onClick={login}
      src="https://storage.googleapis.com/builderbook/G.svg"
      alt="Log in with Google"
      className={classes.google}
    />
  )

Login.defaultProps = {
  login: () => {},
  logout: () => {},
  user: null,
  classes: {}
}

Login.PropTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  user: PropTypes.object,
  classes: PropTypes.objectOf(PropTypes.string)
}

export default withStyles(styles)(Login)
