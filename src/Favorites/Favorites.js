import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";
import Pagination from "../Filters/Pagination";
import MoviesRender from "../Movies/MoviesRender";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 20px;
  fontsize: 30px;
`;

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

Favorites.propTypes = {
  fetchFavourites: propTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
