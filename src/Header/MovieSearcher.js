import React from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
})

const MovieSearcher = ({ classes }) => (
  <Typography className={classes.title} variant="h6" color="inherit" noWrap>
    Moviesearcher
  </Typography>
)

export default withStyles(styles)(MovieSearcher)
