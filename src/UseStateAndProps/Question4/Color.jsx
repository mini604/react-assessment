import React from 'react';

const ChildComponent1 = ({display}) => {
    return(
        
        <div>
            <p>Color in ChildComponent1: {display}</p>
        </div>
    )
};

const ChildComponent2 = ({display}) => {
    return(
        <div>
            <p>Color in ChildComponent2:{display}</p>
        </div>
    )
};

const Color = () => {
   const colorValue1 = "green";
   const colorValue2 = "pink";
  return (
    <div>
        <h2>Parent Component</h2>
        <ChildComponent1 display = {colorValue1}/>
        <ChildComponent2 display = {colorValue2}/>
     
    </div>
  )
}

export default Color