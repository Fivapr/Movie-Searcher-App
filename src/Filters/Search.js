import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { Autocomplete, Button } from "react-md";
import { Typography } from "material-ui";

const mapDispatchToProps = dispatch => ({
  fetchAutocompleteMovies: value => {
    dispatch(actions.FETCH_AUTOCOMPLETE_MOVIES(value));
  },
  fetchSearchMovies: (value, page = 1) => {
    dispatch(actions.FETCH_SEARCH_MOVIES(value, page));
  }
});

const mapStateToProps = state => ({
  autocompleteMovies: state.filtersReducer.autocompleteMovies
});

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      autocompleteMovies: [],
      searchHeader: "Today In Theaters!"
    };
  }

  separateMovies = movies => {
    return movies
      .map(movie => movie.title + " " + movie.release_date.slice(0, 4))
      .slice(0, 8);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      autocompleteMovies: this.separateMovies(nextProps.autocompleteMovies)
    });
  }

  handleChange = event => {
    this.setState(
      ({ value }) => ({ value: event }),
      () => {
        this.state.value.length &&
          this.props.fetchAutocompleteMovies(this.state.value);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ searchHeader: "Search for: " + this.state.value });
    this.props.fetchSearchMovies(this.state.value);
  };

  linkToSingleMovie = movieid => {
    this.props.history.push(`/movies/${movieid}`);
  };

  handleAutocomplete = event => {
    let autocompletedmovie = this.props.autocompleteMovies.filter(movie => {
      return movie.title === event.slice(0, -5);
    });
    this.linkToSingleMovie(autocompletedmovie[0].id);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{ margin: 20, display: "flex", alignItems: "flex-end" }}
        >
          <Autocomplete
            filter={null}
            label="Search by title"
            placeholder="La la land"
            data={this.state.autocompleteMovies}
            onChange={this.handleChange}
            onAutocomplete={this.handleAutocomplete}
            style={{ marginRight: 20 }}
          />

          <Button
            raised
            swapTheming
            style={{ backgroundColor: "#ff7961" }}
            type="submit"
            value="submit"
          >
            Search
          </Button>
        </form>

        <Typography
          variant="headline"
          color="inherit"
          style={{ margin: 20, fontSize: 30 }}
        >
          {this.state.searchHeader}
        </Typography>
      </div>
    );
  }
}

Search.propTypes = {
  autocompleteMovies: propTypes.array
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
