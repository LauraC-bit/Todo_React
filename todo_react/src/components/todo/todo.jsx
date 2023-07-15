import "./todo.scss";
import { useState } from "react";

const Todo = (props) => {
  const { arrayInput } = props;

  let toCompleted = () => {
    let span = document.getElementById(arrayInput.counter);
    if (span.classList.contains("cross")) {
      span.classList.remove("cross");
      arrayInput.isComplete = false;
    } else {
      span.classList.add("cross");
      arrayInput.isComplete = true;
    }
  };

  return (
    <div className="inputValueDiv" onClick={(e) => toCompleted()}>
      {arrayInput.isComplete ? (
        <span id={arrayInput.counter} className="cross">
          {arrayInput.value}
        </span>
      ) : (
        <span id={arrayInput.counter}>{arrayInput.value}</span>
      )}
    </div>
  );
};

export default Todo;
