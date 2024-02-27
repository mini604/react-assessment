import React, { useReducer } from 'react';

//initial state of the cart
const initialState = {
    items: [], //Array to store cart items
    total: 0, //Total cost of items in the cart
};

//Reducers function to manage cart state
const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                items: [...state.items, action.item], //add item to cart
                total: state.total + action.item.price, // update total cost
            };
            case 'APPLY_DISCOUNT':
            return {
             ...state,
                total: state.total * (1 - action.discount / 100), // Apply discount to total
      };
                default:
                    return state;
    }
};

const Question6 = () => {
    //initialize cart state using reducer
    const [cartState, dispatch] = useReducer(cartReducer,initialState);

     // Function to handle adding items to the cart
  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

    //function to handle applying discounts to the cart
    const applyDiscount = (discount) =>{
        dispatch({type:'APPLY_DISCOUNT',discount});
    };


  return (
    <div>
        <h2>Simple E-commerce Cart Checkout</h2>
        <div>
        <button onClick={() => addItemToCart({ id: 1, name: 'Product 1', price: 10 })}>Add Product 1</button>
        <button onClick={() => addItemToCart({ id: 2, name: 'Product 2', price: 20 })}>Add Product 2</button>
      </div>
      <div>
        <button onClick={() => applyDiscount(10)}>Apply 10% Discount</button>
        <button onClick={() => applyDiscount(20)}>Apply 20% Discount</button>
      </div>
      <div>
        <h3>Cart Total: ${cartState.total.toFixed(2)}</h3>
        <ul>
          {cartState.items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      </div>
        </div>
    
  )
}

export default Question6