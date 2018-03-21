import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
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
  font-size: 21px;
`;

const FormContainer = styled.form`
  margin: 20px auto;
  min-width: 300px;
  display: flex;
  flex-direction: column;
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
    margin-top: 20px;
  }
`;

const mapStateToProps = state => ({
  sessionId: state.authReducer.sessionId
});

const mapDispatchToProps = dispatch => ({
  fetchSessionId: (login, password) => {
    dispatch(actions.FETCH_SESSION_ID(login, password));
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

  componentWillReceiveProps(nextProps) {
    this.props.sessionId !== nextProps.sessionId &&
      this.props.history.push(`/favorite`);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchSessionId(this.state.login, this.state.password);
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
          You need to have an account on www.themoviedb.org to add and see your
          favorite movies!
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
