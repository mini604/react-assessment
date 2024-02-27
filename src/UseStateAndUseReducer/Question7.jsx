import React, { useState, useReducer, useRef }  from 'react';

//initial state of the drawing
const initialState = {
    isDrawing: false,
    lines: [],
};

//reducer function to manage drawing actions
const drawingReducer = (state, action) =>{
    switch(action.type){
        case 'START_DRAWING':
            return{
                ...state,
                isDrawing:true,
                lines:[...state.lines,{id: action.id, color: action.color, points: [action.point]}],
            };

        case 'DRAW':
        if (!state.isDrawing) return state;
        return{
            ...state,
            lines:state.lines.map((line) =>
            line.id === action.id ? {...line, points: [...line.points, action.point]}: line
            )
        };

        case 'STOP_DRAWING':
            return{
                ...state,
                isDrawing:false,
            };

        case 'CLEAR_DRAWING':
            return initialState;
            default:
                return state;
    };

   
};

const Question7 = () => {
     // State to manage drawing color
  const [color, setColor] = useState('#000');

  // Initialize drawing state using useReducer
  const [drawingState, dispatch] = useReducer(drawingReducer, initialState);

  // Ref to store the canvas element
  const canvasRef = useRef(null);

  // Function to handle mouse down event
  const handleMouseDown = (event) => {
    const point = { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
    dispatch({ type: 'START_DRAWING', color, point });
  };

  // Function to handle mouse move event
  const handleMouseMove = (event) => {
    const point = { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY };
    dispatch({ type: 'DRAW', point });
  };

  // Function to handle mouse up event
  const handleMouseUp = () => {
    dispatch({ type: 'STOP_DRAWING' });
  };

  // Function to handle clear button click
  const handleClearClick = () => {
    dispatch({ type: 'CLEAR_DRAWING' });
  };

  return (
    <div>
        <h2>Drawing Component</h2>
      <div>
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          style={{ border: '1px solid #000' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      </div>
      <div>
        <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  )
}

export default Question7