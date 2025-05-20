import React from 'react'
import cardsData from './cardsData'
const Card = () => {
  return (
    <div className='grid grid-cols-3 w-200 m-auto mt-5 gap-5'>
    {cardsData.map((el,index)=>(
        <div key={index} className=' cursor-pointer w-50 h-50 border'>{el.info}</div>
    ))}
    </div>
  )
}

export default Card