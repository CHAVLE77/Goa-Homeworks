import React, { useState } from 'react'
import parts from './parts'

const Index = () => {
  const [count, setCount] = useState(0)
  const [addedItems, setAddedItems] = useState([])

  document.body.style.backgroundColor = '#f4f4f3'

  function addToCart(item) {
    setCount((prev) => prev + 1)

    setAddedItems((prevItems) => {
      const check = prevItems.find((el) => el.id === item.id)

      if (check) {
        return prevItems.map((el) =>
          el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el 
        )
      } else {
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }

  const totalPrice = addedItems.reduce((accumulator, currentValue)=>accumulator + currentValue.price * currentValue.quantity,0)

  return (
    <div className="flex gap-10 px-10 pt-6">
      <div className="grid grid-cols-4 gap-5">
        {parts.map((el) => (
          <div key={el.id} className="w-[230px] p-4 border rounded-xl bg-white shadow relative">
            <img className="w-full h-40 object-cover rounded-md" src={el.image} />
            <div className="mt-3">
              <h2 className="text-lg font-semibold">{el.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{el.description}</p>
              <div className="mt-2 font-bold text-green-600">${el.price}</div>
              <div className="text-sm mt-1">
                {el.inStock ? (
                  <b className="text-green-500">In stock</b>
                ) : (
                  <b className="text-red-500">Out of stock</b>
                )}
              </div>
              <button
                onClick={() => addToCart(el)}
                className="mt-2 w-full h-9 text-white bg-[#13be2a] hover:bg-green-600 rounded cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-90 h-130 border bg-white shadow rounded-xl p-4">
        <b className="text-2xl">Your Items ({count})</b>
        <div className="mt-4">
          {addedItems.map((item) => (
            <div key={item.id} className="mb-2">
              <p className="text-gray-800">- {item.name} x{item.quantity}</p>
              <p className="text-sm text-gray-600">Price: ${item.price}</p>
              </div>
            ))}
            <p className='mt-110 text-xl absolute bottom-60 right-81 z-1'>Price:{totalPrice}$</p>

        </div>
      </div>

      <button className="absolute w-88 h-13 right-42 rounded-lg bottom-42  bg-blue-600 text-white cursor-pointer border">
        Submit
      </button>
    </div>
  )
}

export default Index
