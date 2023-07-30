import "./App.css";
import Header from "./myComponents/header";
import Todos from "./myComponents/todos";
import Foomter from "./myComponents/foomter";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to the Market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno:2,
      title: "Go to the Mall",
      desc: "You need to go to the Mall to get this job done"
    },
    {
      sno:3,
      title: "Go to the Ghat",
      desc: "You need to go to the Ghat to get this job done"
    }
  ]);
  return (
    <>
    <Header title="My Todo List"searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Foomter/>
    </>
  );
}

export default App;
