import React from "react";
import TodoForm from "./TodoForm";

export default function TodoList(props) {
  // console.log(props.state.todos);

  return (
    <div>
      {props.state.map(
        todo => (
          <TodoForm item={todo.item} key={todo.id} completed={todo.completed} />
        )
        // console.log(todo);
      )}
    </div>
  );
}
