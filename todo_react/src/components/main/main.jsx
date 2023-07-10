import "./main.scss";
import { useState } from "react";
import Todo from "../todo/todo.jsx";

const Main = (props) => {
  // const {} = props;
  const [inputValue, setinputValue] = useState("");
  let arrayInput = [];

  const UpdateValue = (value) => {
    setinputValue(value);
    console.log(inputValue);
  };

  const handleClick = () => {
    if (!inputValue || inputValue === "") {
      return;
    }
    arrayInput.push(inputValue);
    console.log(arrayInput);
    //stocker inputValue dans un endroit (tableau ou localStorage) pour transmettre a Todo, et effacer l'input. Boucle forEach pour tableau, dans return avec {} qui entoure Todo et je lui passerais plus inputValue mais la valeur du tableau.
    //tableau crée et transmis a Todo, forEach bien placé? Pour la liste ne s'incrémente pas? (la valeur écrase la précèdente) et pourquoi elle n'apparait pas dans la div visiuellement
    setinputValue("");
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
      <Todo arrayInput={arrayInput.forEach((element) => element)} />
    </div>
  );
};

export default Main;
