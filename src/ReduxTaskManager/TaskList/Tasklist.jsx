import React from 'react';
import { connect } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../Action/Action';
const TaskList = ({ tasks, toggleTaskStatus, deleteTask }) => {
    return (
      <div >
        <ul style={{ fontSize:'18px', margin:'6%',background:'#f0f0f0',
           borderRadius:'10px',
           boxShadow:'5px 5px 15px rgba(0, 0, 0, 0.3)',
           border:'2px solid #ccc',
           paddingTop:'10px'
           }}>
        {tasks.map(task => (
         <div key={task.id}>
            <li style={{marginBottom:'10px'}}>
            <span>{task.title}</span></li>
            <li style={{marginBottom:'10px'}}>
            <span>{task.description}</span></li>
            
            <div style={{fontWeight:'bold'}}>{task.completed ? 'Completed' : 'Pending'}</div>
            <button onClick={() => toggleTaskStatus(task.id)}
            style={{
                height:'40px',
                backgroundColor:'#0a0a23',
                color: '#fff',
                fontSize:'14px',
                margin:'8px',
                padding:'10px'
            }}>Toggle Status</button>
            <button onClick={() => deleteTask(task.id)}
            style={{
                height:'40px',
                backgroundColor:'#0a0a23',
                color: '#fff',
                fontSize:'14px',
                margin:'8px',
                padding:'10px'
            }}>Delete</button>
          </div>
        ))}
        </ul>
      </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    tasks: state.tasks
  });
  
  export default connect(mapStateToProps, { toggleTaskStatus, deleteTask })(TaskList);