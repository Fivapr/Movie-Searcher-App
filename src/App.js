import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./Common/Header";
import NoMatch from "./Common/NoMatch";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import MoviesRender from "./Movies/MoviesRender";
import SingleMovie from "./Movie/SingleMovie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/([0-9]+)" component={SingleMovie} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
