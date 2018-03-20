import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Header from "./Common/Header";
import NoMatch from "./Common/NoMatch";
import Home from "./Home/Home";
import Auth from "./Auth/Auth";
import Favorites from "./Favorites/Favorites";
import Movies from "./Movies/Movies";
import MoviesRender from "./Movies/MoviesRender";
import SingleMovie from "./Movie/SingleMovie";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  sessionId: state.authReducer.sessionId
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route
            exact
            path="/favorites"
            render={() =>
              this.props.sessionId ? (
                <Favorites />
              ) : (
                <Redirect to={{ pathname: "/auth" }} />
              )
            }
          />
          <Route exact path="/auth" component={Auth} />
          <Route path="/movies/([0-9]+)" component={SingleMovie} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, null)(App));
