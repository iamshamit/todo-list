import React from 'react'

export default function TodoItems({todo,onDelete}) {
  return (
    <div className='container my-5 border border-primary p-3 rounded'>
      <h4 className='my-3'>{todo.title}</h4>
      <p className='my-3'>{todo.desc}</p>
      <button className="btn btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
