import React, { Component } from "react";
import { connect } from "react-redux";
import MoviesRender from "./MoviesRender";
import Search from "./Search";
import SearchGenres from "./SearchGenres";
import * as actions from "./Actions";

const mapDispatchToProps = dispatch => ({
  fetchTopRated: () => {
    dispatch(actions.FETCH_TOP_RATED());
  }
});

const container = {
  margin: "0 auto",
  maxWidth: "1300px"
};

const searchContainer = {
  display: "flex",
  minHeight: 130
};

class Movies extends Component {
  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    return (
      <div>
        <div style={container}>
          <div style={searchContainer}>
            <Search />
            <SearchGenres />
          </div>
        </div>
        <MoviesRender />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Movies);
