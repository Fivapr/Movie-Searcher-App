import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import * as actions from "./Actions";

const mapDispatchToProps = dispatch => ({
  fetchByYears: (startYear, endYear, page = 1) => {
    dispatch(actions.FETCH_BY_YEARS(startYear, endYear, page));
  }
});

class SearchYear extends Component {
  constructor() {
    super();
    this.state = {
      startYear: "",
      endYear: ""
    };
  }

  handleChangeStart = e => {
    this.setState({ startYear: e.target.value });
  };

  handleChangeEnd = e => {
    this.setState({ endYear: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchByYears(this.state.startYear, this.state.endYear);
  };

  render() {
    let years = [];
    let start = 1900;
    while (start <= 2018) {
      years.push(start);
      start++;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.startYear} onChange={this.handleChangeStart}>
          {years.map(year => {
            return <option>{year}</option>;
          })}
        </select>
        <select value={this.state.endYear} onChange={this.handleChangeEnd}>
          {years.map(year => {
            return <option>{year}</option>;
          })}
        </select>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchYear);
