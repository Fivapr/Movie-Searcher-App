import { createSelector } from 'reselect'
import { getFavorites } from '../favorites/selectors'

export const getMovies = state => state.getIn(['movies'])
export const getMoviesWithLikes = createSelector(
  getMovies,
  getFavorites,
  (movies, favorites) => {
    if (favorites.size) {
      const favoriteIds = favorites.map(favorite => favorite.get('id'))
      const moviesWithLikeField = movies.map(movie =>
        movie.set('like', favoriteIds.includes(movie.get('id')))
      )

      return moviesWithLikeField
    }

    return movies
  }
)
