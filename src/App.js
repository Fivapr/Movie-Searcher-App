import React, { Component } from "react";
import Search1 from "./Search1";
import Search from "./Search";
import Movies from "./Movies";
import { Toolbar } from "react-md";
import "./App.css";

const container = {
  maxWidth: "1200px",
  padding: "0 16px 0 16px",
  margin: "0 auto"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar title="Movie searcher app" />
        <Search1 />
        <Search />
        <Movies />
      </div>
    );
  }
}

export default App;
