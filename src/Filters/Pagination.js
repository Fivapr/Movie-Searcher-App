import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import * as actions from "./Actions";
import {
  Container,
  Wrapper,
  StyledButton,
  StyledRightButton
} from "../Style/Pagination";

class Pagination extends Component {
  handleIncrementPageClick = () => {
    this.props.fetchNewPage(this.props.lastQuery, this.props.page + 1);
  };

  handleDecrementPageClick = () => {
    this.props.fetchNewPage(this.props.lastQuery, this.props.page - 1);
  };

  render() {
    const { page, pages } = this.props;

    const prevButton =
      page > 1 ? (
        <StyledButton onClick={this.handleDecrementPageClick}>
          Prev page
        </StyledButton>
      ) : (
        <div />
      );

    const nextButton =
      page < pages ? (
        <StyledRightButton onClick={this.handleIncrementPageClick}>
          Next page
        </StyledRightButton>
      ) : (
        <div />
      );

    return (
      <Container>
        <Wrapper>
          You are on {page} page of {pages}
        </Wrapper>
        <Wrapper>
          {prevButton}
          {nextButton}
        </Wrapper>
      </Container>
    );
  }
}

Pagination.propTypes = {
  page: propTypes.number,
  pages: propTypes.number,
  query: propTypes.string
};

const mapStateToProps = state => ({
  page: state.moviesReducer.page,
  pages: state.moviesReducer.pages,
  lastQuery: state.moviesReducer.lastQuery
});

const mapDispatchToProps = dispatch => ({
  fetchNewPage: (lastQuery, page) => {
    dispatch(actions.FETCH_NEW_PAGE(lastQuery, page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
