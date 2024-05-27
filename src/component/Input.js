import React from "react";
import { createElement, useState } from "react";

const Input = () => {
  const [name, setName] = useState("");

  const [outPut, setOutPut] = useState("");

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  const handleOutPut = () => {
    setOutPut(name);
    setName("");
  };

  return React.createElement(
    "div",
    null,
    createElement("hr", null),
    createElement(
      "strong",
      {
        style: {
          color: "blue",
          fontSize: "2.0rem",
          textTransform: "capitalize",
        },
      },
      outPut
    ),
    createElement("br", null),

    createElement("input", {
      style: { padding: "8px", width: "20%" },
      type: "text",
      placeholder: "Write some words",
      value: name,
      onChange: handleSubmit,
    }),
    createElement(
      "button",
      {
        type: "submit",
        onClick: handleOutPut,
        style: { padding: "8px", marginTop: "20px" },
      },
      "Submit"
    )
  );
};
export default Input;
