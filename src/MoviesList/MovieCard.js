import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Favorite from '@material-ui/icons/Favorite'
import { toggleFavorite } from './reducer'

const styles = theme => ({
  favorite: {
    width: '100%',
    height: '100%',
    opacity: 0
  },
  favoriteActive: {
    color: theme.palette.primary.main,
    '&:hover': {
      opacity: 0.8
    }
  },
  favoriteInactive: {
    color: theme.palette.inactive,
    '&:hover': {
      opacity: 0.6
    }
  },
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 500,
    width: 345
  },
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }
})

class MovieCard extends Component {
  state = { isFavorite: this.props.movie.get('like') }

  toggleFavorite = () => {
    this.props.toggleFavorite(this.props.movie)
    this.setState(prevState => ({ isFavorite: !prevState.isFavorite }))
  }

  render() {
    const { movie, classes } = this.props
    const { isFavorite } = this.state

    return (
      <Card className={classes.card} key={movie.id}>
        <CardActionArea className={classes.root}>
          <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500/${movie.get('poster_path')}`}
            title="Poster"
          >
            <Favorite
              className={`${classes.favorite} ${
                isFavorite ? classes.favoriteActive : classes.favoriteInactive
              }`}
              onClick={this.toggleFavorite}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.get('title')}
            </Typography>
            <Typography component="p">{movie.get('overview')}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

const mapDispatchToProps = { toggleFavorite }
const withConnect = connect(
  null,
  mapDispatchToProps
)

export default withConnect(withStyles(styles)(MovieCard))
