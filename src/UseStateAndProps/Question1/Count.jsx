import React, { useState } from 'react'

const  Count = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count +1);
    };


    

  return (
    <div>
        <p style={{marginLeft:'25px'}}>Counter: {count}</p>
        <button className='counter_btn' 
        onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Count;