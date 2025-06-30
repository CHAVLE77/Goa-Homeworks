import React,{useContext} from 'react'
import { textContext } from '../App'
const Comp5 = () => {
    let value = useContext(textContext)
  return (
    <>
    <div className={`${value ? 'bg-black' : 'bg-white'} w-10 h-10`}></div>
    </>
)
}

export default Comp5