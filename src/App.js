import Header from "./myComponents/header";
import Todos from "./myComponents/todos";
import Foomter from "./myComponents/foomter";
import AddTodo from "./myComponents/addTodo";
import React, { useState, useEffect } from "react";
import About from "./myComponents/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      createdAt: formattedDate,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="colors">
      <Router>
        <Header title="TodoListX" searchBar={false} />

        <Routes>
          <Route
            exact path="todo-list/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            }
          />

          <Route path="todo-list/about" element={<About />} />
        </Routes>

        <Foomter />
      </Router>
    </div>
  );
}

export default App;
