import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { MenuItem, FormControl, Select, Input, InputLabel } from "material-ui";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: (ids, page = 1) => {
    dispatch(actions.FETCH_BY_GENRES(ids, page));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  }
});

const mapStateToProps = state => ({
  genres: state.filtersReducer.genres
});

class SearchGenres extends Component {
  constructor() {
    super();
    this.state = {
      value: []
    };
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.fetchByGenres(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <FormControl>
        <InputLabel htmlFor="select-multiple">Genres</InputLabel>
        <Select
          multiple
          value={this.state.value}
          onChange={this.handleChange}
          input={<Input id="select-multiple" />}
        >
          {this.props.genres.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

SearchGenres.propTypes = {
  genres: propTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchGenres);
