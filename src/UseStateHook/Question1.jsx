import React, { useState } from 'react';


{/*
Counter component create a react component that display a counter.the counter should start at 0 and have buttons to increment and decrement the value.

*/}


const Question1 = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }
  return (
    <div style={{textAlign:'center',marginTop:'40px'}}>
    <h2>Counter Value:{counter}</h2>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement} disabled={counter===0} >Decrement</button>
    </div>
    
    </div>
  )
}

export default Question1;