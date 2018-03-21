import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";
import styled from "styled-components";
import { Button, TextField } from "react-md";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 20px;
  font-size: 20px;
`;

const StyledLoginField = styled(TextField).attrs({
  id: "floating-center-title",
  label: "Title",
  lineDirection: "center",
  placeholder: "Enter your login",
  fullWidth: true
})``;

const StyledPasswordField = styled(TextField).attrs({
  id: "floating-password",
  label: "Enter your password",
  type: "password",
  fullWidth: true
})``;

const StyledButton = styled(Button).attrs({
  type: "submit",
  value: "submit",
  raised: true,
  swapTheming: true
})`
  && {
    background-color: #fe5b3d;
    flex: 1;
    margin-top: 5px;
  }
`;

const FormContainer = styled.form`
  margin: 20px auto;
  min-width: 300px;
  display: flex;
  flex-direction: column;
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
    this.setState({ login: e });
  };

  handlePasswordChange = e => {
    this.setState({ password: e });
  };

  render() {
    return (
      <Container>
        <Header>
          You need to have an account on www.themoviedb.org to use this app in
          its entirety!
        </Header>
        <FormContainer onSubmit={this.handleSubmit}>
          <StyledLoginField
            value={this.state.login}
            onChange={this.handleLoginChange}
          />

          <StyledPasswordField
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <StyledButton> Sign in </StyledButton>
        </FormContainer>
      </Container>
    );
  }
}

Auth.propTypes = {
  fetchRequestToken: propTypes.function
};

export default connect(null, mapDispatchToProps)(Auth);
