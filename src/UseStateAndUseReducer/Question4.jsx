import React, { useEffect, useReducer } from 'react';
import { act } from 'react-dom/test-utils';

const API_ENDPOINTS = [
    'https://dummyjson.com/products/1',
    'https://dummyjson.com/carts/1'
];

//reducer function to manage the state of fetched data

const dataReducer = (state, action) =>{
    switch(action.type){
        case 'Fetch_Success':
            return{
                ...state,
                [action.index] : action.data //stored fetched data using index as key
                
            };
            default:
                return state;

    }
}; 



const Question4 = () => {
    
        //Initialize state to store fetched data
        const [data,dispatch] = useReducer(dataReducer,{});
    
        useEffect(() => {
            const fetchData = async () =>{
                try{
                    //fetch data from all API endpoints simultaneously
                    const responses = await Promise.all(API_ENDPOINTS.map(endpoint => fetch(endpoint)));
                    const jsonData = await Promise.all(responses.map(response => response.json()));
                    
                    //Dispatch fetch success action for each fetched data
                    jsonData.forEach((data, index) =>{
                        dispatch({type: 'Fetch_Success',index,data});
    
                    })
                    
                } catch (error) {
                    console.error('error Fetching data:',error);
                }
            };
            fetchData();
        }, []);
    
    
  return (
    <div>
       <h2>Multi-API Data Fetcher</h2>
      <div>
        {Object.keys(data).length === API_ENDPOINTS.length ? (
          <div>
            {Object.values(data).map((responseData, index) => (
              <div key={index}>
                <h3>Response from API {index + 1}</h3>
                <pre>{JSON.stringify(responseData, null, 2)}</pre>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

    </div>
  )
}

export default Question4