import React, { Component } from "react";
import Search from "./Search";
import Movies from "./Movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Movies />
      </div>
    );
  }
}

export default App;
