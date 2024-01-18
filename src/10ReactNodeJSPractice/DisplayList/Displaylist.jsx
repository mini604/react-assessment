
import React from 'react'

const Displaylist = () => {

    const items =[
        'items 1',
        'items 2',
        'items 3',
        'items 4',
        'items 5',
    ];

   

  return (
    <div>
        <ul>
            {items.map((item,index) =>
            <li key={index}>{item}</li>) }
        </ul> 
    </div>
  )
}

export default Displaylist