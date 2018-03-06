import React, { Component } from "react";
import MoviesRender from "./MoviesRender";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";

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
    return (
      <div>
        <Typography variant="headline" color="inherit">
          Today in theatre!
        </Typography>

        <MoviesRender />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Home);
