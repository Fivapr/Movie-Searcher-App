import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { MenuItem, FormControl, Select, Input, InputLabel } from "material-ui";

const mapDispatchToProps = dispatch => ({
  fetchByExtendedSearch: (genreIds, startYear, endYear, sortBy, page = 1) => {
    dispatch(
      actions.FETCH_BY_EXTENDED_SEARCH(
        genreIds,
        startYear,
        endYear,
        sortBy,
        page
      )
    );
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
      endYear: "",
      sortBy: ""
    };
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  handleChangeGenres = e => {
    this.setState({ genreIds: e.target.value });
    this.props.fetchByExtendedSearch(
      e.target.value,
      this.state.startYear,
      this.state.endYear,
      this.state.sortBy
    );
  };

  handleChangeStartYear = e => {
    this.setState({ startYear: e.target.value });
    this.props.fetchByExtendedSearch(
      this.state.genreIds,
      e.target.value,
      this.state.endYear,
      this.state.sortBy
    );
  };

  handleChangeEndYear = e => {
    this.setState({ endYear: e.target.value });
    this.props.fetchByExtendedSearch(
      this.state.genreIds,
      this.state.startYear,
      e.target.value,
      this.state.sortBy
    );
  };

  handleChangeSortBy = e => {
    this.setState({ sortBy: e.target.value });
    this.props.fetchByExtendedSearch(
      this.state.genreIds,
      this.state.startYear,
      this.state.endYear,
      e.target.value
    );
  };

  render() {
    let years = [""];
    let end = 2018;
    while (end >= 1900) {
      years.push(end);
      end--;
    }

    let sortFilters = [
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
      <div
        style={{
          display: "flex"
        }}
      >
        <div style={{ flex: 1, margin: 20, display: "flex" }}>
          <FormControl style={{ flex: 1, marginRight: 10 }}>
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
          </FormControl>

          <FormControl style={{ flex: 1 }}>
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
          </FormControl>
        </div>

        <FormControl style={{ flex: 1, margin: 20 }}>
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

        <FormControl style={{ flex: 1, margin: 20 }}>
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
        </FormControl>
      </div>
    );
  }
}

ExtendedSearch.propTypes = {
  genres: propTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedSearch);
