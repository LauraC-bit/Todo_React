import "./main.scss";
import trash from "../../assets/trash-can-solid.svg";
import { useState } from "react";
import { useEffect } from "react";
import Todo from "../todo/todo.jsx";

const Main = (props) => {
  const [inputValue, setinputValue] = useState("");
  const [arrayInput, setArrayInput] = useState([]);
  const [items, setItems] = useState([]);
 

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
    setItems(arrayInput)
  };

  let deleteTodo = () => {
    let trash = document.getElementById("trash");
    const udaptedItems = arrayInput.filter((element) => {
        if (element.isComplete === true) {
          return false //ne push pas l'element dans le tableau car false (spécialité filter)
        } else {
          return true; //push l'element dans le tableau car true (spécialité filter)
        }
      })
    setArrayInput(udaptedItems);
    localStorage.setItem("items", JSON.stringify(udaptedItems)) //permet de venir à écraser le tableau précèdent de local Storage avec le nouveau tableau visuel html (setarrayinput) 
    //dans le local storage.

    let crossElements = document.querySelectorAll(".cross");
    crossElements.forEach((element) => {
      element.classList.remove("cross");
    });
    trash.classList.add("disabled");
    trash.classList.remove("trash-can");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(arrayInput));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  

  return (
    <div className="main">
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
      <div id="trash" className="disabled" onClick={(e) => deleteTodo()}>
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
