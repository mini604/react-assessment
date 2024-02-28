import React from 'react';

const sumTwoNumbers = (num1, num2) => num1 +num2;

const Question2 = () => {
    const number1 = 5;
    const number2 = 10;
    const result = sumTwoNumbers(number1,number2);
  return (
    <div>
        <p>Number 1: {number1}</p>
        <p>Number 2: {number2}</p>
        <p>Result: {result}</p>
    </div>
  )
}

export default Question2