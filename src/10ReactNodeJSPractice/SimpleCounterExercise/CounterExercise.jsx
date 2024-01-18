import React, { useState } from 'react';


{
    /*
    Creating a simple counter using React which increments or decrements
count dynamically on-screen as the user clicks on the button. This exercise
requires knowledge of fundamental React concepts such as State,
Component, etc.
We can complete the simple counter exercise with the following steps:
1. Create React state to store the count value.
2. Declare JS functions to incement or decrement the value
through setState().
3. Add HTML buttons with onClick to JSX code. */
}

const CounterExercise = () => {

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count -1);
    }


  return (
    <div>
        <div style={{textAlign:'center',marginTop:'15%'}}>
        <h2>Count: {count}</h2>
        <button onClick={increment} className='btn'>Increment</button>
        <button onClick={decrement} className='btn'>Decrement</button>
        </div>

    </div>
  )
}

export default CounterExercise;