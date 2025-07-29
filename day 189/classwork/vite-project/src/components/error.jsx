import React from 'react'
import '../App.css'
import { Link } from 'react-router'
const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[600px]'>
    <h1 className='text-white text-[11rem]'>404</h1>
    <p className='text-gray-300'>we are sorry but the page you requested was not found</p>
    <Link to={"/index"} className='w-27 my-7 text-xl pt-[3px] text-center text-white cursor-pointer hover:bg-white hover:text-black transition duration-[350ms] ease-in-out h-10 border rounded-lg border-white'>return</Link>
    </div>
)
}

export default Error