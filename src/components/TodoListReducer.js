import React, { useState } from "react";
import { v4 } from "uuid";
import TodoList from "./TodoList";
import { useTodoContext } from "./todoContext";

export const TodoListReducer = () => {
  const [title, setTitle] = useState("");
  const { add } = useTodoContext();

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      id: v4(),
    };
    add(data);
    setTitle("");
  };
  // console.log();

  return (
    <div>
      <>
        <form onSubmit={submitHandler}>
          <input type="text" value={title} onChange={changeHandler} />
          <button disabled={!title} type="submit">
            ADD
          </button>
        </form>
      </>
      <TodoList />
    </div>
  );
};
