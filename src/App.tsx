import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField"
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {

      if(text) {
          setTodos([...todos, {id: Date.now(), todo: text, isDone: false}]);
      }
  };

  return (
      <div className="App">
        <span className="heading">Will's Test App</span>
        <InputField handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
  );
};

export default App;
