import React from 'react';

const findMaxNumber = (numbers) =>{
    return Math.max(...numbers);
};

const Question6 = () => {
    const numbers = [10,5,20,15,8];
    const maxNumber = findMaxNumber(numbers);

  return (
    <div>
        <p>Numbers: {numbers.join(",")}</p>
        <p>Maximum number: {maxNumber}</p>
    </div>
  )
}

export default Question6