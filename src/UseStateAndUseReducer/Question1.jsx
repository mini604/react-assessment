import React from 'react'
import { useState } from 'react'

const Question1 = () => {
    const [color, setColor] = useState(generateRandomColor());
    //Function to generate a random color in RGB Format

    function generateRandomColor() {
        const r = Math.floor(Math.random() * 265);
        const g = Math.floor(Math.random() * 265);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;

    }

    //fucntion to handle button click and update the color state

    const handleButtonClick = () => {
        setColor(generateRandomColor())

    };
  return (
    <div>
            <h2>Random Color Generator</h2>
            <div 
            style={{
                background:color,
                width:'200px',
                height:'200px',
                margin:'20px',
                border:'1px solid #000',
            }}/>
            <button onClick={handleButtonClick}>Generate Random Color</button>
            <p>Current Color:{color}</p>
    </div>
  )
}

export default Question1