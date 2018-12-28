import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Favorite from '@material-ui/icons/Favorite'
import { fromJS } from 'immutable'
import immutablePropTypes from 'react-immutable-proptypes'
import PropTypes from 'prop-types'

const MovieCard = ({ movie, classes }) => {
  const toggleFavorite = () => this.props.toggleFavorite(this.props.movie)
  const isFavorite = movie.get('like')

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
            onClick={toggleFavorite}
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

MovieCard.defaultProps = {
  movie: fromJS({}),
  classes: {}
}

MovieCard.propTypes = {
  movie: immutablePropTypes.map,
  classes: PropTypes.objectOf(PropTypes.string)
}

export default MovieCard
