import React, { Component } from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "material-ui";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #ff7961;
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    margin: 0 auto;
    width: 1000px;
    padding: 0;
  }
`;

const StyledTypography = styled(Typography)`
  && {
    padding: 22px;
    cursor: pointer;
    &&:hover {
      background-color: #f44336;
    }
  }
`;

const AppName = styled(Typography)`
  && {
    padding: 22px;
  }
`;

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
