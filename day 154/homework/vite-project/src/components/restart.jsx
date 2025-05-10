import React from 'react'

export const Restart = ({restart}) => {
  return (
    <>
    <button onClick={restart} className='w-30 h-9 bg-gray-800 text-white   cursor-pointer'>restart</button>
    </>
)
}

export default Restart
