import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./Common/Header";
import NoMatch from "./Common/NoMatch";
import Home from "./Home";
import Search from "./Filters/Search";
import SearchGenres from "./Filters/SearchGenres";
import Movies from "./Movies/Movies";
import MoviesRender from "./Movies/MoviesRender";
import SingleMovie from "./Movie/SingleMovie";

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
              <div>
                <Search />
                <Home />
                <MoviesRender />
              </div>
            )}
          />

          <Route
            exact
            path="/movies"
            component={() => (
              <div>
                <SearchGenres />
                <Movies />
                <MoviesRender />
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
