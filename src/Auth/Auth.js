import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column"
};

const mapStateToProps = state => ({
  requestToken: state.authReducer.requestToken,
  sessionId: state.authReducer.sessionId
});

const mapDispatchToProps = dispatch => ({
  fetchRequestToken: (login, password) => {
    dispatch(actions.FETCH_REQUEST_TOKEN(login, password));
  },
  fetchSessionId: () => {
    dispatch(actions.FETCH_SESSION_ID());
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
    console.log(this.state.login, this.state.password);
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
      <div style={container}>
        <Typography
          variant="headline"
          color="inherit"
          style={{ margin: 20, fontSize: 30 }}
        >
          You need to sign in here!
        </Typography>
        {this.props.sessionId}
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
      </div>
    );
  }
}

Auth.propTypes = {
  fetchRequestToken: propTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
