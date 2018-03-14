import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";
import Search from "../Filters/Search";
import Pagination from "../Filters/Pagination";
import MoviesRender from "../Movies/MoviesRender";

const mapDispatchToProps = dispatch => ({
  fetchTodayMovies: () => {
    dispatch(actions.FETCH_TODAY_MOVIES());
  }
});

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column"
};

class Home extends Component {
  componentDidMount() {
    this.props.fetchTodayMovies();
  }

  render() {
    return (
      <div style={container}>
        <Search />

        <Typography
          variant="headline"
          color="inherit"
          style={{ margin: 20, fontSize: 30 }}
        >
          Today In Theatres!
        </Typography>

        <MoviesRender />

        <Pagination />
      </div>
    );
  }
}

Home.propTypes = {
  fetchTodayMovies: propTypes.function
};

export default connect(null, mapDispatchToProps)(Home);
