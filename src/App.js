import './App.css';
import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from './MyComponents/About'
import React, { useState, useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Routes,Route} from 'react-router-dom';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
  localStorage.getItem("todos");
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo)=>{
    setTodos(todos.filter((e)=> {
      return e!==todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo =(title, desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

 const [todos,setTodos] = useState([initTodo]);
 useEffect(()=>{
  localStorage.getItem("todos", JSON.stringify(todos));
  },[todos])
  return (
    <>
    <Router>
    <Header title="My Todo List" searchBar={false}/>
    <Routes>
      <Route exact path='/' Component={()=>{
        return(
          <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        </>
        )
      }}/>
    <Route path='/about' element={<About/>}/>
        </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
