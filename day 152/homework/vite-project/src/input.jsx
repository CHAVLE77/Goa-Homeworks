import React from 'react'
const Input = ({func}) => {
    return (
    <>
    <input className='border m-2' placeholder='write' onChange={func} type="text" />
    </>
)
}
export default Input
