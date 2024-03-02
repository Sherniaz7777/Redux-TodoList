import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImpDone, addTodo, toggleTodo } from "./redux";
import "./App.css"

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handImpDone = (id) => {
    dispatch(ImpDone(id));
  };
  

  return (
    <div className="container">
        <h1>TodoList Redux</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="TodoList"
          value={text}
          onChange={(e) => setText(e.target.value)
             
        }
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className="TodoList-text">
            <li className="list"
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                fontWeight: todo.imp ? "bold" : "normal",
                color: todo.imp ? "tomato" : "black",
              }}
            >
              {todo.text}
            </li>
            <button className='btn btn-outline-warning' onClick={()=>handImpDone(todo.id)}><i className="bi bi-exclamation-lg"></i></button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
