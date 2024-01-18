import React from 'react';

const ChildComponent = ({message}) =>{
    return(
        <div>
            <h2>Meassage Form Parent: {message}</h2>
        </div>
    )

}

const ParentComponent = () => {
    const messageToChild = "Hello From Parent";
  return (
    <div>
        <h2>Parent Component</h2>
        <ChildComponent message = {messageToChild}/>
    </div>
  )
}

export default ParentComponent;