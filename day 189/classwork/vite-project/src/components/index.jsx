import React from 'react'
import { Link } from 'react-router'
const Index = () => {
  return (
    <>
    <div className='flex flex-col mt-[300px]'>
    <p className='text-white text-center'>Welcome to this Page</p>
    <Link to={"/error"} className="w-27 m-auto text-md text-center pt-[6px] my-7 text-white cursor-pointer hover:bg-white hover:text-black transition duration-[350ms] ease-in-out h-10 border rounded-lg border-white">Next Page</Link>
    </div>
    </>
  )
}

export default Index