import React, { useState } from 'react'
import { IoRemoveCircleSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css'

function Todo({ todo,x, onUpdateTodo }) {

  const {id, content}= todo; // bu şekilde todo.content yazmaktan kurtuluyoruz. direkt content yazabiliriz.

  const [edittable, setEditable]= useState(false);
  const [newTodo,setNewTodo]= useState(content);

  const removeTodo = ()=> {
    x(id);
  }

  const updateTodo = ()=>{
    const request ={
      id:id,
      content:newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '2px solid green', padding: '10px', marginTop:'10px' }}>
      <div>
        {
          edittable ? <input style={{width:'300px'}} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" />: content
        } 
      </div>
      <div>
        <IoRemoveCircleSharp className='todo-icons' onClick={removeTodo} />
        {
          edittable ? <FaCheck className='todo-icons' onClick={updateTodo} /> 
          
          : <FaEdit className='todo-icons' onClick={()=> setEditable(true)} />
        }
        
      </div>
    </div>
  )
}

export default Todo