import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import { TextField, SelectField } from "react-md";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: id => {
    dispatch(actions.FETCH_BY_GENRES(id));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
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
      genre: ""
    };
  }

  handleGenreChange = e => {
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
        <SelectField
          id="select-field-1"
          label="Genres"
          placeholder="Whatever"
          className="md-cell"
          simplifiedMenu={true}
          menuItems={kek}
          onChange={this.handleGenreChange.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
