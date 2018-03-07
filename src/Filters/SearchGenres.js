import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import * as actions from "./Actions";
import { withStyles } from "material-ui/styles";
import {
  MenuItem,
  FormControl,
  Select,
  Chip,
  Input,
  InputLabel
} from "material-ui";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: (ids, page = 1) => {
    dispatch(actions.FETCH_BY_GENRES(ids, page));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  }
});

const mapStateToProps = state => ({
  genres: state.filtersReducer.genres
});

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    paddingTop: 16
  },
  formControl: {
    margin: theme.spacing.unit,
    margin: "0 auto",
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class MultipleSelect extends Component {
  state = {
    name: []
  };

  componentDidMount() {
    this.props.fetchGenres();
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
    let selectedGenres = this.props.genres.filter(genre => {
      return this.state.name.includes(genre.name);
    });
    let selectedGenresIds = selectedGenres.map(genre => genre.id);
    this.props.fetchByGenres(selectedGenresIds);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { classes, theme } = this.props;
    let genres = this.props.genres.map(genre => {
      return genre.name;
    });

    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Genres</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {genres.map(name => (
              <MenuItem
                key={name}
                value={name}
                style={{
                  fontWeight:
                    this.state.name.indexOf(name) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium
                }}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(
    styles,
    { withTheme: true },
    {
      name: "MultipleSelect"
    }
  ),
  connect(mapStateToProps, mapDispatchToProps)
)(MultipleSelect);

// export default withStyles(styles, { withTheme: true })(MultipleSelect);
