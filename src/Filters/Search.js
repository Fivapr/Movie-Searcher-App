import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { Autocomplete, Button } from "react-md";
import { Typography } from "material-ui";
import styled from "styled-components";

const StyledButton = styled(Button).attrs({
  type: "submit",
  value: "submit",
  raised: "raised",
  swapTheming: "swapTheming"
})`
  && {
    background-color: #ff7961;
  }
`;

const StyledAutocomplete = styled(Autocomplete).attrs({
  filter: null,
  label: "Search by title",
  placeholder: "La la land"
})`
  && {
    margin-right: 20px;
  }
`;

const FormContainer = styled.form`
  margin: 20px;
  display: flex;
  align-items: flex-end;
`;

const mapDispatchToProps = dispatch => ({
  fetchAutocompleteMovies: value => {
    dispatch(actions.FETCH_AUTOCOMPLETE_MOVIES(value));
  },
  fetchSearchMovies: value => {
    dispatch(actions.FETCH_SEARCH_MOVIES(value));
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
      page: ""
    };
  }

  separateMovies = movies => {
    return movies
      .map(movie => movie.title + " " + movie.release_date.slice(0, 4))
      .slice(0, 8);
  };

  componentWillReceiveProps(nextProps) {
    this.props.fetchSearchMovies(this.state.value, nextProps.page);

    this.setState({
      page: nextProps.page
    });
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
        <FormContainer onSubmit={this.handleSubmit}>
          <StyledAutocomplete
            data={this.state.autocompleteMovies}
            onChange={this.handleChange}
            onAutocomplete={this.handleAutocomplete}
          />

          <StyledButton>Search</StyledButton>
        </FormContainer>
      </div>
    );
  }
}

Search.propTypes = {
  autocompleteMovies: propTypes.array,
  fetchSearchMovies: propTypes.function,
  fetchAutocompleteMovies: propTypes.function
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
