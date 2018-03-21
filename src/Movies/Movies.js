import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import ExtendedSearch from "../Filters/ExtendedSearch";
import Pagination from "../Filters/Pagination";
import MoviesRender from "./MoviesRender";
import propTypes from "prop-types";
import styled from "styled-components";

const mapDispatchToProps = dispatch => ({
  fetchTopRated: () => {
    dispatch(actions.FETCH_TOP_RATED());
  }
});

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 20px;
  font-size: 30px;
`;

class Movies extends Component {
  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    return (
      <Container>
        <ExtendedSearch />
        <Header>Discover New Movies</Header>
        <MoviesRender />
        <Pagination />
      </Container>
    );
  }
}

Movies.propTypes = {
  fetchTopRated: propTypes.function
};

export default connect(null, mapDispatchToProps)(Movies);
