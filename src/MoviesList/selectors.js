export const getMovies = state => state.getIn(['moviesReducer', 'movies'])
export const getFavorites = state => state.getIn(['moviesReducer', 'favorites'])
