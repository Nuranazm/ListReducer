import { createContext, useContext,useReducer } from "react";
import { v4 } from "uuid";

export const TodoContext = createContext();

const initialState = {
  todos: [
    {
      id: v4(),
      title: "todo list",
    },
  ],
};

export const ACTION_TYPES = {
  ADD: "ADD",
  DELETE: "DELETE",
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case ACTION_TYPES.DELETE: {
      return {
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export const TodoProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const add = (data) => dispatch({ type: ACTION_TYPES.ADD, payload: data });

  const deleteTodo = (id) =>
    dispatch({ type: ACTION_TYPES.DELETE, payload: id });

  const contextValue = {
    state,
    add,
    deleteTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
