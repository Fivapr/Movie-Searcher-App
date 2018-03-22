import React, { Component } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import {
  StyledAppBar,
  StyledToolbar,
  StyledTypography,
  AppName
} from "../Style/Header";

class Header extends Component {
  linkToHome = () => {
    this.props.history.push("/");
  };
  linkToMovies = () => {
    this.props.history.push("/movies");
  };
  linkToFavorites = () => {
    this.props.history.push("/favorite");
  };

  render() {
    return (
      <div>
        <StyledAppBar position="static" color="default">
          <StyledToolbar>
            <AppName variant="title">Movie searcher app</AppName>

            <StyledTypography variant="title" onClick={this.linkToHome}>
              Home
            </StyledTypography>

            <StyledTypography variant="title" onClick={this.linkToMovies}>
              Movies
            </StyledTypography>

            <StyledTypography variant="title" onClick={this.linkToFavorites}>
              My Favorites
            </StyledTypography>
          </StyledToolbar>
        </StyledAppBar>
      </div>
    );
  }
}

export default withRouter(Header);
