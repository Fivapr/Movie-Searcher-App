import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";
import Search from "../Filters/Search";
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
  font-size: 30px;
`;

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
      <Container>
        <Search />
        <Header>Today In Theatres!</Header>
        <MoviesRender />
        <Pagination />
      </Container>
    );
  }
}

Home.propTypes = {
  fetchTodayMovies: propTypes.function
};

export default connect(null, mapDispatchToProps)(Home);
