import React, { Component } from "react";
import SearchGenres from "./SearchGenres";
import Search from "./Search";
import Movies from "./Movies";
import { Toolbar } from "react-md";
import "./App.css";
import Header from "./Header";

const container = {
  margin: "0 auto",
  maxWidth: "1300px"
};

const searchContainer = {
  display: "flex",
  minHeight: 130
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={container}>
          <div style={searchContainer}>
            <Search />
            <SearchGenres />
          </div>
          <Movies />
        </div>
      </div>
    );
  }
}
// <SearchGenres />
export default App;
