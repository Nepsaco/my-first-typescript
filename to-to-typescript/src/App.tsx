import React, { useState } from 'react';
import './App.css';
import { TodoList } from './TodoList'
import { AddTodoForm } from './AddTodoForm'

const initialTodos =[{
  text: 'walk the dog',
  complete: true
}, {
  text: 'write app',
  complete: false
}]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        }
      } return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App;
