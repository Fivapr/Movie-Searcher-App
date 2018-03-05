import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { MenuItem } from "material-ui/Menu";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import compose from "recompose/compose";

const mapDispatchToProps = dispatch => ({
  fetchSearchMovies: (value, page = 1) => {
    dispatch(actions.FETCH_SEARCH_MOVIES(value, page));
  },
  fetchAutocompleteMovies: value => {
    dispatch(actions.FETCH_AUTOCOMPLETE_MOVIES(value));
  }
});

const mapStateToProps = state => ({
  autocompleteMovies: state.reducer.autocompleteMovies
});

let suggestions;

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  container: {
    flex: 1,
    paddingTop: 30,
    position: "relative",
    height: 50,
    width: 200,
    margin: "0 auto 15px auto"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 1488
  },
  suggestion: {
    display: "block",
    zIndex: 1488
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    zIndex: 1488
  }
});

class Search extends Component {
  componentDidMount() {
    suggestions = this.props.autocompleteMovies;
  }

  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(suggestions);
    this.props.fetchSearchMovies(this.state.value);
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.props.autocompleteMovies
        .map(movie => movie.title)
        .slice(0, 8)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    if (newValue !== "") this.props.fetchAutocompleteMovies(newValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} style={{ flex: 1 }}>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderInputComponent={renderInput}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={{
            classes,
            placeholder: "La la land",
            value: this.state.value,
            onChange: this.handleChange
          }}
        />
      </form>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles, {
    name: "Search"
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(Search);
