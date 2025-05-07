import React from 'react'

export const Studentlist = ({students}) => {
  return (
    <>
    {students.map((el,index) =>{
        <p key={index} >{el}</p>
    })}
    </>
)
}

export default Studentlist