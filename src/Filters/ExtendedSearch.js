import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { MenuItem, Select, Input, InputLabel } from "material-ui";
import {
  Container,
  YearsContainer,
  FormControlContainer,
  YearsFormControl,
  YearsLeftFormControl
} from "../Style/ExtendedSearch";

class ExtendedSearch extends Component {
  constructor() {
    super();
    this.state = {
      genreIds: [],
      startYear: "",
      endYear: "",
      sortBy: ""
    };
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  handleChangeGenres = e => {
    this.setState(
      { genreIds: e.target.value },
      this.props.fetchByExtendedSearch(this.state)
    );
  };

  handleChangeStartYear = e => {
    this.setState(
      { startYear: e.target.value },
      this.props.fetchByExtendedSearch(this.state)
    );
  };

  handleChangeEndYear = e => {
    this.setState(
      { endYear: e.target.value },
      this.props.fetchByExtendedSearch(this.state)
    );
  };

  handleChangeSortBy = e => {
    this.setState(
      { sortBy: e.target.value },
      this.props.fetchByExtendedSearch(this.state)
    );
  };

  render() {
    let years = [""];
    let end = 2018;
    while (end >= 1900) {
      years.push(end);
      end--;
    }

    const sortFilters = [
      {
        name: "Popularity descending",
        apiName: "popularity.desc"
      },
      {
        name: "Popularity ascending",
        apiName: "popularity.asc"
      },
      {
        name: "Rating descending",
        apiName: "vote_average.desc"
      },
      {
        name: "Rating ascending",
        apiName: "vote_average.asc"
      },
      {
        name: "Release date descending",
        apiName: "release_date.desc"
      },
      {
        name: "Release date ascending",
        apiName: "release_date.asc"
      },
      {
        name: "Title (A-Z)",
        apiName: "original_title.desc"
      },
      {
        name: "Title (Z-A)",
        apiName: "original_title.asc"
      }
    ];

    return (
      <Container>
        <YearsContainer>
          <YearsLeftFormControl>
            <InputLabel htmlFor="select-start-year">from</InputLabel>
            <Select
              value={this.state.startYear}
              onChange={this.handleChangeStartYear}
              input={<Input id="select-start-year" />}
            >
              {years.map(year => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </YearsLeftFormControl>

          <YearsFormControl>
            <InputLabel htmlFor="select-end-year">to</InputLabel>
            <Select
              value={this.state.endYear}
              onChange={this.handleChangeEndYear}
              input={<Input id="select-end-year" />}
            >
              {years.map(year => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </YearsFormControl>
        </YearsContainer>

        <FormControlContainer>
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
        </FormControlContainer>

        <FormControlContainer>
          <InputLabel htmlFor="select-sort-by">Sort by</InputLabel>
          <Select
            value={this.state.sortBy}
            onChange={this.handleChangeSortBy}
            input={<Input id="select-sort-by" />}
          >
            {sortFilters.map(sort => (
              <MenuItem key={sort.apiName} value={sort.apiName}>
                {sort.name}
              </MenuItem>
            ))}
          </Select>
        </FormControlContainer>
      </Container>
    );
  }
}

ExtendedSearch.propTypes = {
  genres: propTypes.array,
  fetchGenres: propTypes.function,
  fetchByExtendedSearch: propTypes.function
};

const mapStateToProps = state => ({
  genres: state.filtersReducer.genres
});

const mapDispatchToProps = dispatch => ({
  fetchByExtendedSearch: (genreIds, startYear, endYear, sortBy) => {
    dispatch(
      actions.FETCH_BY_EXTENDED_SEARCH(genreIds, startYear, endYear, sortBy)
    );
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedSearch);
