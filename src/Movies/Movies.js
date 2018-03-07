import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import MoviesRender from "./MoviesRender";
import propTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  fetchTopRated: () => {
    dispatch(actions.FETCH_TOP_RATED());
  }
});

const container = {
  margin: "0 auto",
  maxWidth: "1000px"
};

const searchContainer = {
  display: "flex",
  minHeight: 130
};

class Movies extends Component {
  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    return <div>Movies</div>;
  }
}

Movies.propTypes = {
  fetchTopRated: propTypes.function
};

export default connect(null, mapDispatchToProps)(Movies);
