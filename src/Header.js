import React, { Component } from "react";
import { Toolbar } from "react-md";

const container = {
  maxWidth: "1200px",
  padding: "0 16px 0 16px",
  margin: "0 auto"
};

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#abcdef" }} className="wrapper">
        <div style={container} className="Header">
          <h2
            style={{
              height: 64,
              lineHeight: "64px",
              fontSize: 27,
              margin: 0,
              padding: 0,
              color: "black"
            }}
          >
            Movie searcher
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
