export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';

export const addTask = (title, description) => ({
    type: ADD_TASK,
    payload: { title, description }
  });
  
  export const updateTask = (id, title, description) => ({
    type: UPDATE_TASK,
    payload: { id, title, description }
  });
  
  export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: { id }
  });
  
  export const toggleTaskStatus = (id) => ({
    type: TOGGLE_TASK_STATUS,
    payload: { id }
  });