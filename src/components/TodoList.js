import React from "react";
import { useTodoContext } from "./todoContext";

function TodoList({}) {
  const { state, deleteTodo } = useTodoContext();

  return (
    <div>
      {state.todos.map((el) => (
        <div key={el.id}>
          <h1>{el.title}</h1>
          <button
            onClick={() => {
              deleteTodo(el.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
