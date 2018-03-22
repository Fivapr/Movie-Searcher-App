import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Pagination from "../Filters/Pagination";
import MoviesRender from "../Movies/MoviesRender";
import { Container, Header } from "../Style/Favorite";

class Favorite extends Component {
  componentDidMount() {
    this.props.fetchFavorite(this.props.sessionId);
  }

  render() {
    return (
      <Container>
        <Header>Your Favourites!</Header>
        <MoviesRender />
        <Pagination />
      </Container>
    );
  }
}

Favorite.propTypes = {
  fetchFavourites: propTypes.function
};

const mapStateToProps = state => ({
  sessionId: state.authReducer.sessionId
});

const mapDispatchToProps = dispatch => ({
  fetchFavorite: sessionId => {
    dispatch(actions.FETCH_FAVORITE(sessionId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
