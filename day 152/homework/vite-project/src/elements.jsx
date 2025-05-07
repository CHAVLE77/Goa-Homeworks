import React from 'react'

export const Elements = () => {
    const arr = Array.from({ length: 100 }, () => Math.random() < 0.5);
  return (
    <>
    {arr.map((el)=>(
        <p>{el ? '1' : '0'}</p>
    ))}
    </>
)
}
export default Elements
