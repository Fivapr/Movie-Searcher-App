import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  Container,
  Header,
  FormContainer,
  StyledLoginField,
  StyledPasswordField,
  StyledButton
} from "../Style/Auth";

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
  fetchSessionId: propTypes.function
};

const mapStateToProps = state => ({
  sessionId: state.authReducer.sessionId
});

const mapDispatchToProps = dispatch => ({
  fetchSessionId: (login, password) => {
    dispatch(actions.FETCH_SESSION_ID(login, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
