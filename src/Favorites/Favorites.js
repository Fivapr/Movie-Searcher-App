import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";
import Pagination from "../Filters/Pagination";
import MoviesRender from "../Movies/MoviesRender";

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column"
};

const mapDispatchToProps = dispatch => ({
  fetchFavorites: props => {
    dispatch(actions.FETCH_FAVORITES());
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchFavorites();
  }

  render() {
    return (
      <div style={container}>
        <Typography
          variant="headline"
          color="inherit"
          style={{ margin: 20, fontSize: 30 }}
        >
          Your Favourites!
        </Typography>

        <MoviesRender />

        <Pagination />
      </div>
    );
  }
}

Home.propTypes = {
  fetchFavourites: propTypes.function
};

export default connect(null, mapDispatchToProps)(Home);
