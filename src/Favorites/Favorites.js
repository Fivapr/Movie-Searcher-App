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

const mapStateToProps = state => ({
  sessionId: state.authReducer.sessionId
});

const mapDispatchToProps = dispatch => ({
  fetchFavorite: sessionId => {
    dispatch(actions.FETCH_FAVORITE(sessionId));
  }
});

class Favorites extends Component {
  componentDidMount() {
    console.log(this.props.sessionId);
    this.props.fetchFavorite(this.props.sessionId);
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

Favorites.propTypes = {
  fetchFavourites: propTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
