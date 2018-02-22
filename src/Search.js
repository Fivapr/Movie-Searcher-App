import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";

const mapDispatchToProps = dispatch => ({
  fetchSearchbooks: () => {
    dispatch(actions.FETCH_SEARCHBOOKS());
  }
});

class Search extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     newBooks: []
  //   };
  // }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.searchtext.value);
    // console.log(store.getState());
  }

  render() {
    return (
      <div>
        <h3>Search</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Searchtext</label>
            <input type="text" ref="searchtext" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

export default connect(mapDispatchToProps)(Search);
