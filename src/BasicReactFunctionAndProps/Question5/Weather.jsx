import React from 'react'

const Todolist = ({todos}) => {
  return (
    <div>
        <h2>Todo List</h2>
        <ul>
            {
             todos.map(todo =>(
                <li key={todo.id}>{todo.task}</li>
             ))
            }
        </ul>
    </div>
  )
}

export default Todolist