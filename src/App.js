import React, { Component } from "react";
import SearchGenres from "./SearchGenres";
import Search from "./Search";
import Movies from "./Movies";
import { Toolbar } from "react-md";
import "./App.css";
import Header from "./Header";
import { Route, Switch, withRouter } from "react-router-dom";
import NoMatch from "./NoMatch";
import SingleMovie from "./SingleMovie";
import Home from "./Home";
import MoviesByGenres from "./MoviesByGenres";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/([0-9]+)" component={SingleMovie} />
          <Route path="/movies/([a-zA-Z&]+)" component={MoviesByGenres} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
