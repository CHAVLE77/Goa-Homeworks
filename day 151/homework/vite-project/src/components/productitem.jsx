import React from 'react'

export const Productitem = ({ name, price, inStock}) => {
  return (
    <>
    <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-semibold">{name}</h2>
    <p>Price: ${price}</p>
    <p className={inStock ? 'text-green-600' : 'text-red-600'}>
        {inStock ? 'In Stock' : 'Out of Stock'}
    </p>
    </div>
    </>
  )
}

export default Productitem
