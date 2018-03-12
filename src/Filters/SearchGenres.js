import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { MenuItem, FormControl, Select, Input, InputLabel } from "material-ui";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: (genreIds, startYear, endYear, page = 1) => {
    dispatch(actions.FETCH_BY_GENRES(genreIds, startYear, endYear, page));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  }
});

const mapStateToProps = state => ({
  genres: state.filtersReducer.genres
});

class ExtendedSearch extends Component {
  constructor() {
    super();
    this.state = {
      genreIds: [],
      startYear: "",
      endYear: ""
    };
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  handleChangeGenres = e => {
    this.setState({ genreIds: e.target.value });
  };

  handleChangeStart = e => {
    this.setState({ startYear: e.target.value });
  };

  handleChangeEnd = e => {
    this.setState({ endYear: e.target.value });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    this.props.fetchByGenres(
      this.state.genreIds,
      this.state.startYear,
      this.state.endYear
    );
  };

  render() {
    let years = [""];
    let start = 1900;
    while (start <= 2018) {
      years.push(start);
      start++;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="select-multiple">Genres</InputLabel>
          <Select
            multiple
            value={this.state.genreIds}
            onChange={this.handleChangeGenres}
            input={<Input id="select-multiple" />}
          >
            {this.props.genres.map(genre => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="select-start-year">from</InputLabel>
          <Select
            value={this.state.startYear}
            onChange={this.handleChangeStart}
            input={<Input id="select-start-year" />}
          >
            {years.map(year => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="select-end-year">to</InputLabel>
          <Select
            value={this.state.endYear}
            onChange={this.handleChangeEnd}
            input={<Input id="select-end-year" />}
          >
            {years.map(year => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <input type="submit" value="submit" />
      </form>
    );
  }
}

ExtendedSearch.propTypes = {
  genres: propTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedSearch);
