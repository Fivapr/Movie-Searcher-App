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
  fetchRequestToken: () => {
    dispatch(actions.FETCH_REQUEST_TOKEN());
  },
  fetchSessionId: () => {
    dispatch(actions.FETCH_SESSION_ID());
  }
});

class Auth extends Component {
  componentDidMount() {
    this.props.fetchRequestToken();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchSessionId(nextProps.requestToken);
  // }

  render() {
    return (
      <div style={container}>
        <Typography
          variant="headline"
          color="inherit"
          style={{ margin: 20, fontSize: 30 }}
        >
          You need to sign in here!
          <hr />
          {`https://www.themoviedb.org/authenticate/${
            this.props.requestToken
          }/allow?`}
          <hr />
          <button onClick={this.handleClick}>
            click here after signing in
          </button>
          {this.props.sessionId}
        </Typography>
      </div>
    );
  }
}

Auth.propTypes = {
  fetchRequestToken: propTypes.function
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
