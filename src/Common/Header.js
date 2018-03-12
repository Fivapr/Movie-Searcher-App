import React, { Component } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Toolbar } from "material-ui";
import { withStyles, createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

const container = {
  margin: "0 auto",
  width: "1000px"
};

class Header extends Component {
  linkToHome = () => {
    this.props.history.push("/");
  };
  linkToMovies = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          color="default"
          style={{ backgroundColor: theme.palette.secondary.light }}
        >
          <Toolbar>
            <b variant="title" color="inherit">
              Movie searcher app||
            </b>
            <b variant="title" color="inherit" onClick={this.linkToHome}>
              Home||
            </b>
            <b variant="title" color="inherit" onClick={this.linkToMovies}>
              Movies
            </b>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Header);
