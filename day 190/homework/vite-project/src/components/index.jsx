import React from 'react'
import { Link } from 'react-router'
const Index = () => {
  return (
    <>
    <nav className='flex justify-center gap-10 '>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/settings'}>Settings</Link>
    </nav>
    </>
)
}

export default Index