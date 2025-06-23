import React,{useEffect,useRef,useState} from 'react'
const Timer = () => {
    const [time,setTime] = useState(0)
    let elementRef = useRef(null)
    useEffect(()=>{
        elementRef.current = setInterval(()=>{
            setTime(prev=>prev+1)
        },1000)
        return () => clearInterval(elementRef.current)
    },[])
  return (
    <>
    <p>{time}</p>
    <button onClick={()=>clearInterval(elementRef.current)} className='border cursor-pointer'>Stop</button>
    <button className='border cursor-pointer block mt-2' onClick={()=>setTime(0)}>Reset</button>
    </>
)
}

export default Timer