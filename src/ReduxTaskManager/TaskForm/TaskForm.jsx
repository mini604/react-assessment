import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Action/Action';
const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(title, description);
      setTitle('');
      setDescription('');
    };
  
    return (
      <form onSubmit={handleSubmit} 
      style={{
           border:'2px solid #ccc',
           display:'flex',
           flexDirection:'column',
           justifyContent:'center',
           margin:'5%',
           padding:'3%',
           background:'#f0f0f0',
           borderRadius:'10px',
           boxShadow:'5px 5px 15px rgba(0, 0, 0, 0.3)'
           
            }}>
        <input type="text" value={title} style={{padding:'5px',}} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
        <br/>
        <textarea value={description} style={{padding:'5px',}} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" />
        <br/>
        <button style={{
            height:'40px',
            backgroundColor:'#0a0a23',
            color: '#fff',
            fontSize:'18px'
        }} type="submit">Add Task</button>
      </form>
    );
  };
  
  export default connect(null, { addTask })(TaskForm);