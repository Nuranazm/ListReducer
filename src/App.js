import { TodoListReducer } from "./components/TodoListReducer";
import { TodoProvaider } from "./components/todoContext";
function App() {
  return (
    <TodoProvaider>
      <div className="App">
        <TodoListReducer />
      </div>
    </TodoProvaider>
  );
}

export default App;
