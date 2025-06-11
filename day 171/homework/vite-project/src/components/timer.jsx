import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [time,setTime] = useState(0)
    const [bool,setBool] = useState(true)
    const [reset,setReset] = useState(false)
    useEffect(()=>{
        if(bool){
        let plus = setInterval(()=>{
            setTime(prev=>prev+1)
        },1000)
        return () => clearInterval(plus)
    }
    },[bool])

    useEffect(()=>{
        if(reset){
            setTime(0)
            setReset(false)
        }
    },[reset])
  return (
    <div>
        <p>{time}</p>
        <p onClick={()=>setReset(true)} className='border cursor-pointer'>reset</p>
        <p onClick={()=>setBool(false)} className='border cursor-pointer'>stop</p>
        <p onClick={()=>setBool(true)} className='border cursor-pointer'>resume</p>
    </div>
  )
}

export default Timer