import React, { Component } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "material-ui";
import { withStyles, createMuiTheme } from "material-ui/styles";

const container = {
  margin: "0 auto",
  width: "1000px",
  padding: 0
};

const menuItem = {
  padding: 22,
  cursor: "pointer"
};

class Header extends Component {
  linkToHome = () => {
    this.props.history.push("/");
  };
  linkToMovies = () => {
    this.props.history.push("/movies");
  };
  linkToFavorites = () => {
    this.props.history.push("/favorites");
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          color="default"
          style={{ backgroundColor: "#ff7961" }}
        >
          <Toolbar style={container}>
            <Typography variant="title" color="inherit" style={{ padding: 22 }}>
              Movie searcher app
            </Typography>

            <Typography
              style={menuItem}
              variant="title"
              color="inherit"
              id="hover-effect"
              onClick={this.linkToHome}
            >
              Home
            </Typography>

            <Typography
              style={menuItem}
              variant="title"
              color="inherit"
              id="hover-effect"
              onClick={this.linkToMovies}
            >
              Movies
            </Typography>

            <Typography
              style={menuItem}
              variant="title"
              color="inherit"
              id="hover-effect"
              onClick={this.linkToFavorites}
            >
              My Favorites
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Header);
