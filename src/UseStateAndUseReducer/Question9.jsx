import React, { useState } from 'react';

const Question9 = () => {
    //state to manage the rating
    const [rating, setRating] = useState(0);
    //function to handle clicking on a star
    const handleStarClick = (value) => {
        setRating(value);
    };
  return (
    <div>
        <h2>Rating Component</h2>
        <p>Selected Rating:{rating}</p>
        <div>
            {[1,2,3,4,5].map((value) =>(
                <span
                key = {value}
                onClick={()=> handleStarClick(value)}
                style={{
                    cursor:'pointer',
                    color: value <= rating ? 'gold' : 'gray'
                }}
                >
                  &#9733;   
                </span>

                ))}
        </div>
    </div>
  )
}

export default Question9