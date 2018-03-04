import React, { Component } from "react";
import { render } from "react-dom";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const container = {
  margin: "0 auto"
};

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar style={container}>
            <Typography variant="title" color="inherit">
              Movie searcher app
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
