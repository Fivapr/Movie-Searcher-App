import React, { Component } from 'react'
import withPropsStyles from '../utils/withPropsStyles'
import Favorite from '@material-ui/icons/Favorite'

const styles = (props, theme) => ({
  favorite: {
    width: '100%',
    height: '100%',
    opacity: 0,
    color: props.movie.get('like') ? theme.palette.primary.main : theme.palette.inactive,
    '&:hover': {
      opacity: props.movie.get('like') ? 0.8 : 0.6
    }
  }
})

export class Like extends Component {
  render() {
    const { classes, onClick } = this.props
    return <Favorite className={classes.favorite} onClick={onClick} />
  }
}

export default withPropsStyles(styles)(Like)
