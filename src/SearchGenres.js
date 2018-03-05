import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import { ListItemText } from "material-ui/List";
import Select from "material-ui/Select";
import Checkbox from "material-ui/Checkbox";
import Chip from "material-ui/Chip";
import { connect } from "react-redux";
import * as actions from "./Actions";
import compose from "recompose/compose";

const mapDispatchToProps = dispatch => ({
  fetchByGenres: ids => {
    dispatch(actions.FETCH_BY_GENRES(ids));
  },
  fetchGenres: () => {
    dispatch(actions.FETCH_GENRES());
  }
});

const mapStateToProps = state => ({
  genres: state.reducer.genres
});

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
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
  componentDidMount() {
    this.props.fetchGenres();
  }

  state = {
    name: []
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
    let selectedGenres = this.props.genres.filter(genre => {
      return e.target.value.includes(genre.name);
    });

    console.log(selectedGenres);

    let selectedGenresIds = selectedGenres.map(genre => genre.id);
    console.log(selectedGenresIds);
    this.props.fetchByGenres(selectedGenresIds);
  };

  render() {
    const { classes, theme } = this.props;
    let genres = this.props.genres.map(genre => {
      return genre.name;
    });

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
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
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

// export default withStyles(styles, { withTheme: true })(MultipleSelect);

export default compose(
  withStyles(
    styles,
    { withTheme: true },
    {
      name: "MultipleSelect"
    }
  ),
  connect(mapStateToProps, mapDispatchToProps)
)(MultipleSelect);
