import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import ExtendedSearch from "../Filters/ExtendedSearch";
import Pagination from "../Filters/Pagination";
import MoviesRender from "./MoviesRender";
import propTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  fetchTopRated: () => {
    dispatch(actions.FETCH_TOP_RATED());
  }
});

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column"
};

class Movies extends Component {
  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    return (
      <div style={container}>
        <ExtendedSearch />
        <div style={{ margin: 20, fontSize: 30 }}>Discover New Movies</div>
        <MoviesRender />
        <Pagination />
      </div>
    );
  }
}

Movies.propTypes = {
  fetchTopRated: propTypes.function
};

export default connect(null, mapDispatchToProps)(Movies);
