import React from 'react';

const calculateStringLengths = (strings) =>{
    return strings.map(str => str.length);
};

const Question4 = () => {
    const strings = ["apple", "banana", "orange","kiwi"];
    const lengths = calculateStringLengths(strings)
  return (
    <div>
            <p>Length of strings: {lengths.join(",")}</p>
    </div>
  )
}

export default Question4