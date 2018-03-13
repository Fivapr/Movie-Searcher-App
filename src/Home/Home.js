import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  fetchTodayMovies: () => {
    dispatch(actions.FETCH_TODAY_MOVIES());
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchTodayMovies();
  }

  render() {
    return <div />;
  }
}

Home.propTypes = {
  fetchTodayMovies: propTypes.function
};

export default connect(null, mapDispatchToProps)(Home);
