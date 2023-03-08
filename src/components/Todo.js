import React, { Fragment } from "react";

const date = new Date();
const dateAsString = date.toString();
// const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];
// console.log("timezone", timezone);
// console.log(date.toLocaleTimeString(), timezone);

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todos);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <Fragment>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button className="complete-btn" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
        <div className="timezone">
          <i className="fas fa-globe"></i>
          &nbsp; &nbsp;
          {dateAsString}
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
