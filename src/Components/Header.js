import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'

import MovieSearch from './MovieSearch'

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
})

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null
  }

  handleProfileMenuOpen = event => this.setState({ anchorEl: event.currentTarget })
  handleMenuClose = () => this.setState({ anchorEl: null })

  linkToThread = () => (window.location = 'https://2ch.hk/wrk/res/1407024.html')

  render() {
    const { anchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>My favourites</MenuItem>
        <MenuItem onClick={this.linkToThread}>Questions?</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Log out</MenuItem>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Moviesearcher
            </Typography>
            <MovieSearch />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    )
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PrimarySearchAppBar)
