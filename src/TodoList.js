import React from 'react'
import Todo from './Todo'

export default function TodoList( { todos, toggleTodo }) {
  return (
    todos.map(todo => {
        //Key for efficency purposes, only wanting to update those Todos that are updated
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
