import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";

const mapDispatchToProps = dispatch => ({
  fetchSearchBooks: searchPredicate => {
    dispatch(actions.FETCH_SEARCH_BOOKS(searchPredicate));
  }
  // get: value => {
  //   dispatch(actions.GET_SEARCH_BOOKS(value));
  // }
});

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchPredicate: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchBooks(this.state.searchPredicate);
    // this.props.get(this.state.searchPredicate);
    this.refs.searchtext.value = "";
  }

  onChangeSearchPredicate = e => {
    this.setState({ searchPredicate: e.target.value });
  };

  render() {
    return (
      <div>
        <h3>Search</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Searchtext</label>
            <input
              type="text"
              ref="searchtext"
              onChange={this.onChangeSearchPredicate}
            />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Search);
