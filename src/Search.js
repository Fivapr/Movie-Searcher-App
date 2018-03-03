import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import { TextField, SelectField } from "react-md";
import XHRProvider from "./DataProvider/XHRProvider.js";
import GenreItem from "./GenreItem";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: id => {
    dispatch(actions.FETCH_BY_GENRES(id));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  },
  fetchSearchBooks: searchPredicate => {
    dispatch(actions.FETCH_SEARCH_MOVIES(searchPredicate));
  }
});

const mapStateToProps = state => ({
  genres: state.reducer.genres
});

class Search extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  constructor() {
    super();
    this.state = {
      searchPredicate: "",
      genre: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchBooks(this.state.searchPredicate);
  }

  onChangeSearchPredicate = e => {
    this.setState({ searchPredicate: e });
  };

  lal = e => {
    this.setState({ genre: e });
    let genre = this.props.genres.filter(genre => {
      return genre.name === e;
    })[0];
    console.log(genre.id);
    this.props.fetchByGenres(genre.id);
  };

  render() {
    let kek = this.props.genres.map(genre => {
      return genre.name;
    });

    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            id="floating-center-title"
            label="Title"
            lineDirection="center"
            placeholder="Hello World"
            className="md-cell md-cell--bottom"
            block="false"
            onChange={this.onChangeSearchPredicate}
          />
        </form>
        <SelectField
          id="select-field-1"
          label="Numbers"
          placeholder="Placeholder"
          className="md-cell"
          simplifiedMenu={true}
          menuItems={kek}
          onChange={this.lal.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
