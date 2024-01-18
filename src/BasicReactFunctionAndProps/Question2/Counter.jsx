import React, { useState } from 'react'

const Counter = ({intialCount}) => {
    const [count, setCount] = useState(intialCount);

    const handleIncrement = () => {
        setCount(count + 1);
    }

  return (
    <div >
        <p style={{marginLeft:'28px'}}>Counter: {count}</p>
        <button onClick={handleIncrement} className='counter_btn'>Increment</button>

    </div>
  )
}

export default Counter