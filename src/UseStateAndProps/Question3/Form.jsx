import React, { useState } from 'react';

const Form = ()  => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        alert(`Input Value: ${inputValue}`);
    };
  return (
    <div>
        
        <input
        type='text' 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter Text'
        style={{marginTop:'10px'}}/>
        
        <button onClick={handleButtonClick} className='counter_btn'>Display Value</button>
    </div>
  )
}

export default Form