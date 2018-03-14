import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";
import * as actions from "./Actions";
import { Button } from "react-md";

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

class Pagination extends Component {
  handleIncrementPageClick = () => {
    this.props.fetchNewPage(this.props.lastQuery, this.props.page + 1);
  };

  handleDecrementPageClick = () => {
    this.props.fetchNewPage(this.props.lastQuery, this.props.page - 1);
  };

  render() {
    const prevButton =
      this.props.page > 1 ? (
        <Button
          raised
          swapTheming
          style={{ backgroundColor: "#f44336" }}
          type="submit"
          value="submit"
          onClick={this.handleDecrementPageClick}
        >
          Prev page
        </Button>
      ) : (
        <div />
      );

    const nextButton =
      this.props.page < this.props.pages ? (
        <Button
          raised
          swapTheming
          style={{ backgroundColor: "#f44336", marginLeft: 10 }}
          type="submit"
          value="submit"
          onClick={this.handleIncrementPageClick}
        >
          Next page
        </Button>
      ) : (
        <div />
      );

    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ margin: 20 }}>
          You are on {this.props.page} page of {this.props.pages}
        </div>
        <div style={{ margin: 20 }}>
          {prevButton}
          {nextButton}
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  page: propTypes.number,
  pages: propTypes.number,
  query: propTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
