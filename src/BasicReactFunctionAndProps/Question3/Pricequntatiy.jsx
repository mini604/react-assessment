import React from 'react'

const Pricequntatiy = ({name, price, quantity}) => {
  return (
    <div>
     Product: {name}, Price: ${price}, Quantity: {quantity}
    </div>
  )
}

export default Pricequntatiy