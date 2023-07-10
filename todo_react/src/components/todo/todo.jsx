import "./todo.scss";
import { useState } from "react";

const Todo = (props) => {
  const { arrayInput } = props;

  return (
    <div className="inputValueDiv">
      <span>{arrayInput}</span>
    </div>
  );
};

export default Todo;
