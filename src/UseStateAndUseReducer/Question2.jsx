import React, { useReducer } from 'react';

//Function to generate a random number between 1 and 6 (inclusive)
const rollDice = () => Math.floor(Math.random() *6) + 1;

//reducer function to manage the state of the dice value

const diceReducer = (state, action) =>{
    switch(action.type){
        case 'Roll_Dice':
            return rollDice();
            default:
                return state;
    }
};

const Question2 = () => {
          //initialize the dice the value state using useReducer
        const [diceValue, dispatch] = useReducer(diceReducer,null);

        //Function to handle the Roll Dice button click
        const handleRollDice = () => {
            dispatch({type:'Roll_Dice'});
        };
    

  return (
    <div>
        <h2>Dice Roller Game</h2>
        <button onClick={handleRollDice}>Roll Dice</button>
        {diceValue && <p>Dice Value : {diceValue}</p>}
    </div>
  )
}

export default Question2