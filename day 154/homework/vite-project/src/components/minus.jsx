import React from 'react'

 const Minus = ({minus,setCheck}) => {
  return (
    <>
    <button onClick={()=>{
      minus()
      setCheck(false)
    }} className='w-30 h-9 m-2 bg-red-600 text-white text-2xl cursor-pointer'>-</button>
    </>
)
}

export default Minus