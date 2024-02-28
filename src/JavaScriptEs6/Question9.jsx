import React from 'react';

const greet = (name = "deepti") => {
    console.log(`Hello, ${name}!`);
};

 
const Question9 = () => {
    //only the greet fubction wirh default parameter
    greet();

    //call the greet function with a specific name
    greet("Jhon");
  return (
    <div>
            <p>Check the console for the greetings</p>
    </div>
  )
}

export default Question9