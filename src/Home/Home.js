import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Search from "../Filters/Search";
import Pagination from "../Filters/Pagination";
import MoviesRender from "../Movies/MoviesRender";
import { Container, Header } from "../Style/Home";

const mapDispatchToProps = dispatch => ({
  fetchTodayMovies: () => {
    dispatch(actions.FETCH_TODAY_MOVIES());
  }
});

class Home extends Component {
  constructor() {
    super();
    this.state = { headline: "Today In Theatres!" };
  }

  handleHeadlineChange = value => {
    this.setState({ headline: `Search results for: "${value}"` });
  };

  componentDidMount() {
    this.props.fetchTodayMovies();
  }

  render() {
    return (
      <Container>
        <Search handleHeadlineChange={this.handleHeadlineChange} />
        <Header>{this.state.headline}</Header>
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
