import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./Common/Header";
import NoMatch from "./Common/NoMatch";
import Home from "./Home/Home";
import ExtendedSearch from "./Filters/ExtendedSearch";
import Pagination from "./Filters/Pagination";
import Movies from "./Movies/Movies";
import MoviesRender from "./Movies/MoviesRender";
import SingleMovie from "./Movie/SingleMovie";

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div style={container}>
                <Home />
              </div>
            )}
          />

          <Route
            exact
            path="/movies"
            component={() => (
              <div style={container}>
                <ExtendedSearch />
                <Movies />
                <MoviesRender />
                <Pagination />
              </div>
            )}
          />

          <Route path="/movies/([0-9]+)" component={SingleMovie} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
