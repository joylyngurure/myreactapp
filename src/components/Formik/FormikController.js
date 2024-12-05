import React from "react";
import Input from "./Input.js";
import TextArea from "./TextArea.js";
import Select from "./Select.js";
import RadioButtons from "./RadioButtons.js";
import CheckBoxes from "./CheckBoxes.js";

function FormikController(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return (
        <Input
          {...rest}
          className="rounded-xl bordr-blue-500 border w-full border-gray-300 text-base px-4 py-3 focus:outline-none focus:ring-a"
        />
      );
    case "textArea":
      return (
        <TextArea
          {...rest}
          className="border border-gray-200 rounded w-full py-1.5 px-2"
        />
      );
    case "select":
      return (
        <Select
          {...rest}
          className="border border-gray-200 rounded w-full py-1.5 px-2"
        />
      );
    case "radio":
      return (
        <RadioButtons
          {...rest}
          className="rounded-xl border w-full border-gray-300 text-base px-4 py-3 focus:outline-none focus:ring-a"
        />
      );
    case "checkbox":
      return (
        <CheckBoxes
          {...rest}
          className="rounded-xl  border w-full border-gray-300 text-base px-4 py-3 focus:outline-none focus:ring-a"
        />
      );
    default:
      return null;
  }
}

export default FormikController;