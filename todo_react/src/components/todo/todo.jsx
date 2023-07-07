import './todo.scss';
import { useState } from 'react';

const Todo = (props) => {
  const {inputValue} = props;


  return (
      <div className="inputValueDiv"><span>{inputValue}</span></div>
  );
};


export default Todo;