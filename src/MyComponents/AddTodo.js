import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Descrpiption must be added")
        }
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }
  return (
    <div className="container my-3">
        <h3>Add Todo</h3>
        <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="title">Todo Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Enter Title"/>
    </div>
    <div className="mb-3">
      <label htmlFor="desc">Description</label>
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Enter Description"/>
    </div>
    <button type="submit" className="btn btn-sm btn-success">Add</button>
  </form>
  </div>
  )
}
