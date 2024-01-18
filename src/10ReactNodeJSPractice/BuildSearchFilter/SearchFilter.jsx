
import React, { useState } from 'react';

{/*
  
React code to build a simple search filter functionality to display a filtered
list based on the search query entered by the user.
The following are the steps to create a Search
filter using React JS:
1. Declare React states for search input
values.
2. Create HTML input text for entering
search term and update state
in onChange function.
3. Add Array.filter() on list of items
with search term value.

*/}

const SearchFilter = () => {

    const [searchTerm, setsearchTerm] = useState('');
    const items = [
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Strawberry',
        'Watermelon',
    ];

    const filterItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleInputChange = (event) => {
        setsearchTerm(event.target.value);
    };
  return (
    <div>
        <div style={{textAlign:'center',marginTop:'15%'}}>
        <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleInputChange}
        style={{height:'28px',width:'250px',border:'3px solid darkgray',borderRadius:'10px',padding:'8px'}}
        />
        </div> 
        
        <ul style={{marginLeft:'44%',lineHeight:'1.6rem'}}>
            {filterItems.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    


    </div>
  )
}

export default SearchFilter