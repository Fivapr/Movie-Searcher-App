import React from 'react'
import { withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Typography from '@material-ui/core/Typography'

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

export default withStyles(styles)(
  connect(
    null,
    { push }
  )(MovieSearcher)
)
