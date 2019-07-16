import React from "react";
import { render } from "react-dom";

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;
  return <h1>Hello!! This is the sum: {sum(15, 25)}</h1>;
}

const root = document.getElementById("app-root");

render(<App />, root);
