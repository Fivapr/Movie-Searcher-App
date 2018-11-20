import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

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
        <IconButton
          aria-owns={isMenuOpen ? 'material-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {renderMenu}
      </>
    )
  }
}

export default connect(
  null,
  { push }
)(ProfileIcon)
