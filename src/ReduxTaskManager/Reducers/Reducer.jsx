import { combineReducers } from 'redux';
import { ADD_TASK,UPDATE_TASK, DELETE_TASK, TOGGLE_TASK_STATUS  } from '../Action/Action';


const tasks = (state = [], action) => {
    switch (action.type) {
      case ADD_TASK:
        return [...state, { id: state.length + 1, title: action.payload.title, description: action.payload.description, completed: false }];
      case UPDATE_TASK:
        return state.map(task => task.id === action.payload.id ? { ...task, title: action.payload.title, description: action.payload.description } : task);
      case DELETE_TASK:
        return state.filter(task => task.id !== action.payload.id);
      case TOGGLE_TASK_STATUS:
        return state.map(task => task.id === action.payload.id ? { ...task, completed: !task.completed } : task);
      default:
        return state;
    }
  };

  export default combineReducers({
    tasks
  });
  