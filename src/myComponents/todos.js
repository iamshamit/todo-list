import React from 'react'
import TodoItems from "./todoItems";

const Todos = (procs) => {
  return (
    <div>
      <h3 className='text-center my-3'>Todos List</h3>
      {procs.todos.length===0?<h6 className='text-center my-5'>No Todos to Display!</h6>:
      procs.todos.map((todo) =>{
        return <TodoItems todo={todo} key={todo.sno} onDelete= {procs.onDelete}/>
      })}
    </div>
  )
}

export default Todos
