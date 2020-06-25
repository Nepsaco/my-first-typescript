import React from 'react'
import './TodoListItem.css'


interface TodoListItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({ todo, toggleTodo }) => {
  const handleChange = () => {
    toggleTodo(todo)
  }
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type='checkbox'  checked={todo.complete} onChange={handleChange}/>
        {todo.text}
      </label>
    </li>
  )
}
