import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import MoviesRender from "./MoviesRender";

const mapDispatchToProps = dispatch => ({
  fetchTopRated: () => {
    dispatch(actions.FETCH_TOP_RATED());
  }
});

const container = {
  margin: "0 auto",
  maxWidth: "1000px"
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
        <div>Movies</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Movies);
