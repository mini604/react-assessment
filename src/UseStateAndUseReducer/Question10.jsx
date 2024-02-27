import React, { useState, useReducer } from 'react';

//initial state of the mouse tracker
const initialState = {
    isHovering: false,
    x:0,
    y:0,
};

//reducer function to manage mouse events
const mouseReducer = (state, action) => {
    switch (action.type)
    {
        case 'MOUSE_ENTER':
            return {...state, isHovering:true};
        case 'MOUSE_LEAVE':
            return {...state, isHovering:false};
        case 'MOUSE_MOVE':
            return {...state, x: action.x, y: action.y }
        default:
      return state;
    }

}

const Question10 = () => {
    // Initialize mouse state using useState
  const [mouseState, setMouseState] = useState(initialState);

  // Initialize mouse event handler using useReducer
  const [state, dispatch] = useReducer(mouseReducer, initialState);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    dispatch({ type: 'MOUSE_ENTER' });
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    dispatch({ type: 'MOUSE_LEAVE' });
  };

  // Function to handle mouse move event
  const handleMouseMove = (event) => {
    dispatch({ type: 'MOUSE_MOVE', x: event.clientX, y: event.clientY });
  };
  return (
    <div
    style={{ width: '300px', height: '300px', border: '1px solid #ccc' }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onMouseMove={handleMouseMove}
  >
    <h2>Mouse Tracker</h2>
    <p>Mouse is hovering: {state.isHovering ? 'Yes' : 'No'}</p>
    <p>Mouse coordinates: ({state.x}, {state.y})</p>
  </div>
  )
}

export default Question10