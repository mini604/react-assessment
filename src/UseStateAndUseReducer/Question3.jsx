import React from 'react';
import { useState } from 'react';


const  Question3 = () => {
    //state to manage the input text and character count
    const [text, setText] = useState('');
    const [remainingCharacters, setRemainingCharacter] = useState(100);
    
    //function to handle text input change
    const handleInputChange = (event) => {
        const inputText = event.target.value;
        setText(inputText);
        const remaining = 100 - inputText.length; //update with your character limit

        setRemainingCharacter(remaining);
    };
  return (

    <div>
        <h2>Character Counter</h2>
        <textarea
        value={text}
        onChange={handleInputChange}
        placeholder='Type Something.....'
        rows={4}
        cols={50}
        />
        <p>Remaining Characters: {remainingCharacters}</p>
    </div>
  )
}

export default Question3