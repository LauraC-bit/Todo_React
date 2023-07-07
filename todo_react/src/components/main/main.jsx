import './main.scss';
import { useState } from 'react';
import Todo from "../todo/todo.jsx"

const Main = (props) => {
    const {} = props;
    const [inputValue, setinputValue] = useState("")

    const UpdateValue = (value) => {
        setinputValue(value)
        console.log(inputValue)
  }

    const handleClick = () => {
        if (!inputValue || inputValue === "" ) {
            return
        }
        //stocker inputValue dans un endroit (tableau ou localStorage) pour transmettre a Todo, et effacer l'input. Boucle forEach pour tableau, dans return avec {} qui entoure Todo et je lui passerais plus inputValue mais la valeur du tableau.
        setinputValue("")

    }

    return (
        <div>
        <div className="inputDiv">
            <input className="input" type="text" placeholder="Ma prochaine tâche..." value={inputValue} onChange={(e) => UpdateValue(e.target.value)} />
            <button
            className="button"
            onClick={(e) => handleClick()}> Ajouter à la liste !
            </button>
            </div>
            <Todo inputValue={inputValue} />
            </div>
  );
}

export default Main;