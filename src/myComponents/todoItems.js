import React from 'react'

export default function TodoItems({todo,onDelete}) {
  return (
    <div className='container my-5'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
