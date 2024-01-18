import React, { useState } from 'react';


const Toggle = () => {
    const [isVisible, setVisible] = useState(false);

    const handleToggle = () =>{
        setVisible(!isVisible);
    };
  return (
    <div>
        <button onClick={handleToggle} className='counter_btn'>Toggle Visiblity</button>
        {isVisible && <p>This paragraph is now visible!</p>}
    </div>
  )
}

export default Toggle