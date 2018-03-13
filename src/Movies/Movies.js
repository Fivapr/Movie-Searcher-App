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

class Movies extends Component {
  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    return <div style={{ margin: 20, fontSize: 30 }}>Discover New Movies</div>;
  }
}

Movies.propTypes = {
  fetchTopRated: propTypes.function
};

export default connect(null, mapDispatchToProps)(Movies);
