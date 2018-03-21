import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  && {
    margin: 20px;
    fontsize: 30px;
  }
`;

const mapDispatchToProps = dispatch => ({
  fetchRequestToken: (login, password) => {
    dispatch(actions.FETCH_REQUEST_TOKEN(login, password));
  }
});

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchRequestToken(this.state.login, this.state.password);
  };

  handleLoginChange = e => {
    this.setState({ login: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <Container>
        <StyledTypography variant="headline">
          You need to have an account on www.themoviedb.org to use this app in
          its entirety!
        </StyledTypography>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.login}
            type="text"
            placeholder="login"
            onChange={this.handleLoginChange}
          />
          <input
            value={this.state.password}
            type="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          />
          <input type="submit" />
        </form>
      </Container>
    );
  }
}

Auth.propTypes = {
  fetchRequestToken: propTypes.function
};

export default connect(null, mapDispatchToProps)(Auth);
