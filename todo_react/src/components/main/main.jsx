import "./main.scss";
import trash from "../../assets/trash-can-solid.svg";
import { useState } from "react";
import Todo from "../todo/todo.jsx";

const Main = (props) => {
  // const {} = props;
  const [inputValue, setinputValue] = useState("");
  const [arrayInput, setArrayInput] = useState([]);

  const UpdateValue = (value) => {
    setinputValue(value);
  };

  const handleClick = async () => {
    if (!inputValue || inputValue === "") {
      return;
    }
    if (arrayInput.length === 0) {
      setArrayInput([
        {
          value: inputValue,
          isComplete: false,
          counter: new Date().valueOf(),
        },
      ]);
    } else {
      setArrayInput([
        ...arrayInput,
        { value: inputValue, isComplete: false, counter: new Date().valueOf() },
      ]);
    }

    setinputValue("");
  };

  let deleteTodo = () => {
    setArrayInput(
      arrayInput.filter((element) => {
        if (element.isComplete === true) {
          return false; //ne push pas l'element dans le tableau car false (spécialité filter)
        } else {
          return true; //push l'element dans le tableau car true (spécialité filter)
        }
      })
    );
  };

  return (
    <div>
      <div className="inputDiv">
        <input
          className="input"
          type="text"
          placeholder="Ma prochaine tâche..."
          value={inputValue}
          onChange={(e) => UpdateValue(e.target.value)}
        />
        <button className="button" onClick={(e) => handleClick()}>
          {" "}
          Ajouter à la liste !
        </button>
      </div>
      {arrayInput.map((element, index) => (
        <Todo key={index} arrayInput={element} />
      ))}
      <div className="trash-can" onClick={(e) => deleteTodo()}>
        <img
          src={trash}
          className="svg"
          alt="trash"
          height="1em"
          viewBox="0 0 448 512"
        ></img>
      </div>
    </div>
  );
};

export default Main;
