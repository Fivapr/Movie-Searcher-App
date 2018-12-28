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

export default styles
