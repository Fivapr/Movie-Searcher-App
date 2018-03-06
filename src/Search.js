import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import PropTypes from "prop-types";
import {
  TextField,
  SelectField,
  Autocomplete,
  SelectionControlGroup
} from "react-md";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
  fetchSearchMovies: (value, page = 1) => {
    dispatch(actions.FETCH_SEARCH_MOVIES(value, page));
  },
  fetchAutocompleteMovies: value => {
    dispatch(actions.FETCH_AUTOCOMPLETE_MOVIES(value));
  }
});

const mapStateToProps = state => ({
  autocompleteMovies: state.reducer.autocompleteMovies
});

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      autocompleteMovies: []
    };
  }

  linkToSingleMovie = e => {
    console.log(e);
    console.log(this.state.autocompleteMovies);
    let autocompletedmovie = this.props.autocompleteMovies.filter(movie => {
      console.log(movie.title === e);
      return movie.title === e;
    });
    console.log(autocompletedmovie);
    this.props.history.push(`/movies/${autocompletedmovie[0].id}`);
  };

  separateMovies = movies => {
    return movies.map(movie => movie.title).slice(0, 8);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      autocompleteMovies: this.separateMovies(nextProps.autocompleteMovies)
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchSearchMovies(this.state.value);
  };

  handleChange = event => {
    console.log(event);
    this.setState(
      ({ value }) => ({ value: event }),
      () => {
        this.state.value.length &&
          this.props.fetchAutocompleteMovies(this.state.value);
      }
    );
    // if (newValue !== "") this.props.fetchAutocompleteMovies(newValue);
  };

  handleAutocomplete = event => {
    console.log(event);
    this.setState(
      ({ value }) => ({ value: event }),
      () => {
        this.state.value.length &&
          // this.props.fetchSearchMovies(this.state.value);
          this.linkToSingleMovie(event);
      }
    );
    // if (newValue !== "") this.props.fetchAutocompleteMovies(newValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ flex: 1 }}>
        <Autocomplete
          id="programming-languages"
          label="Search by title"
          placeholder="La la land"
          data={this.state.autocompleteMovies}
          onChange={this.handleChange}
          onAutocomplete={this.handleAutocomplete}
        />
      </form>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

// this.state.autocompleteMovies.map(){movie => {
//   <MenuItem value={movie.title}>{movie.title}</MenuItem>;
// }}
