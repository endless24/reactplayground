import React from "react";
import { createElement } from "react";
import Input from "./Input";

function MyPlayGround() {
  return React.createElement(
    "div",
    { style: { textAlign: "center" } },
    createElement(
      "h1",
      { style: { marginBottom: "20px" } },
      "Creating my own react"
    ),
    <Input />
  );
}

export default MyPlayGround;
