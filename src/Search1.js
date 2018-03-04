import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import {
  TextField,
  SelectField,
  Autocomplete,
  SelectionControlGroup
} from "react-md";

const mapDispatchToProps = dispatch => ({
  fetchSearchMovies: searchPredicate => {
    dispatch(actions.FETCH_SEARCH_MOVIES(searchPredicate));
  },
  fetchAutocompleteMovies: searchPredicate => {
    dispatch(actions.FETCH_AUTOCOMPLETE_MOVIES(searchPredicate));
  }
});

const mapStateToProps = state => ({
  autocompleteMovies: state.reducer.autocompleteMovies
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
    this.props.fetchSearchMovies(this.state.searchPredicate);
  }

  onChangeSearchPredicate = e => {
    this.setState({ searchPredicate: e });
    console.log(this.state.searchPredicate);
    if (e !== "") this.props.fetchAutocompleteMovies(e);
  };

  render() {
    let sampleData = this.props.autocompleteMovies.map(movie => movie.title);
    return (
      <div className="Search md-grid">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Autocomplete
            id="programming-languages"
            label="Search for film"
            placeholder="La la land"
            data={sampleData}
            onChange={this.onChangeSearchPredicate}
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
