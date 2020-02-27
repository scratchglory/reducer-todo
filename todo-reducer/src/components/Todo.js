import React, { useState, useReducer, useEffect } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import TodoList from "./TodoList";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  //  testing state
  // useEffect(() => console.log(state), [state]);
  return (
    <div>
      <h1>Todo Reducer App!</h1>
      <input
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodo });
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          dispatch({ type: "CLEAR_COMPLETED", payload: newTodo });
        }}
      >
        Clear Completed!
      </button>
      <TodoList
        state={state}
        onClick={() => {
          dispatch({ type: "TOGGLE_EDIT", payload: state.id });
        }}
      />
    </div>
  );
};

export default Todo;
