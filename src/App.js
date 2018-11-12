import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 500
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

const baseURL = 'https://api.themoviedb.org/3/'
const api_key = '59017ce86d5101576f32f47160168519'
const api = (path, params) =>
  axios.get(`${baseURL}${path}?`, {
    params: {
      api_key,
      ...params
    }
  })

class App extends Component {
  state = { value: '', movies: [] }
  onChange = e => {
    this.setState({ value: e.target.value }, () =>
      api(`search/movie`, { query: this.state.value })
        .then(res => this.setState({ movies: res.data.results }))
        .catch(err => console.log(err))
    )
  }

  componentDidMount() {
    api('movie/top_rated')
      .then(res => this.setState({ movies: res.data.results }))
      .catch(err => console.log(err))
  }

  renderMovieCard = ({ movie, classes }) => (
    <Card className={classes.card} key={movie.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title="Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography component="p">{movie.overview}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )

  renderInput = ({ value, onChange }) => (
    <TextField
      label="Search for the movie!"
      placeholder="La la land"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true
      }}
      value={value}
      onChange={onChange}
    />
  )

  render() {
    const { classes } = this.props
    const MovieCard = this.renderMovieCard
    const Input = this.renderInput

    return (
      <>
        <Input value={this.state.value} onChange={this.onChange} />
        <div className={classes.container}>
          {this.state.movies.map(movie => (
            <MovieCard movie={movie} classes={classes} />
          ))}
        </div>
      </>
    )
  }
}

export default withStyles(styles)(App)
