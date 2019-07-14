import React, { Component } from "react";
import "./App.css";

class App extends Component {
  sum(a: number, b: number): number {
    return a + b;
  }
  render() {
    return <div className="App">{this.sum(2, 15)}</div>;
  }
}

export default App;
