import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

function TodoList() {
    const [todos,setTodos] = useState([]);
    const[inputValue, setInputValue] = useState('');
    const addtTodo =()=>{
        if(inputValue.trim()!='')
        {
            setTodos([...todos,inputValue]);
            setInputValue('');
        }
    }
const deleteTodos = (index)=>{
    const newTodos = todos.filter((_,i)=>i!==index);
    setTodos(newTodos);

}    

  return (
    <div>
        <h1>To do List</h1>
        <input type="text" value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder='Enter a task....'/>
        <button onClick={addtTodo}><IoIosAdd /></button>
        <ul>
            {
                todos.map((todo,index)=>(
                    <li key={index}>{todo}
                        <button onClick={()=>deleteTodos(index)}><MdDelete /></button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList