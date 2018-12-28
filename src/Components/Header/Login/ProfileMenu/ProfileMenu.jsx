import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'

const ProfileIcon = ({ user, logout, push }) => {
  const [anchor, setAnchor] = useState(null)
  const isMenuOpen = Boolean(anchor)

  const handleMenuOpen = event => this.setState({ anchor: event.currentTarget })
  const handleMenuClose = () => setAnchor(null)

  const linkToThread = () => (window.location = 'https://2ch.hk/wrk/res/1444207.html')
  const linkToFavorite = () => this.props.push('/favorites')
  const handleLogout = () => {
    logout()
    setAnchor(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchor}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={linkToFavorite}>My favorites</MenuItem>
      <MenuItem onClick={linkToThread}>Questions?</MenuItem>
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  )

  return (
    <>
      <Avatar
        role="presentation"
        aria-owns="simple-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        onKeyPress={handleMenuOpen}
        src={user.photoURL}
        style={{ cursor: 'pointer' }}
      />
      {renderMenu}
    </>
  )
}

ProfileIcon.propTypes = {
  logout: PropTypes.func,
  push: PropTypes.func,
  user: PropTypes.shape({ photoURL: PropTypes.string })
}
ProfileIcon.defaultProps = {
  logout: () => {},
  push: () => {},
  user: {}
}

export default ProfileIcon
