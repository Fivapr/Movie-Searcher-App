import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'
import { getUser } from '../auth/selectors'

class ProfileIcon extends Component {
  state = {
    anchorEl: null
  }

  handleProfileMenuOpen = event => this.setState({ anchorEl: event.currentTarget })
  handleMenuClose = () => this.setState({ anchorEl: null })
  handleLogout = () => {
    this.props.logout()
    this.setState({ anchorEl: null })
  }

  linkToThread = () => (window.location = 'https://2ch.hk/wrk/res/1407024.html')
  linkToFavorite = () => this.props.push('/favorites')

  render() {
    const { anchorEl } = this.state
    const { user } = this.props
    const isMenuOpen = Boolean(anchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.linkToFavorite}>My favourites</MenuItem>
        <MenuItem onClick={this.linkToThread}>Questions?</MenuItem>
        <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
      </Menu>
    )

    return (
      <>
        <Avatar
          role="presentation"
          aria-owns="simple-menu"
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          onKeyPress={this.handleProfileMenuOpen}
          src={user.photoURL}
          style={{ cursor: 'pointer' }}
        />
        {renderMenu}
      </>
    )
  }
}

export default connect(
  state => ({ user: getUser(state) }),
  { push }
)(ProfileIcon)
