import React from 'react';

const Question8 = () => {
    //array with values

    const array = [1,2,3];

    //destructuring assignment
    const [value1, value2, value3] = array;
  return (
    <div>
        <p>Value 1: {value1}</p>
        <p>Value 2: {value2}</p>
        <p>Value 3: {value3}</p>
    </div>
  )
}

export default Question8