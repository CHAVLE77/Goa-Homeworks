import React, { useEffect, useState,useRef } from 'react'

const Scroll = () => {
    const [posY,setPosY] = useState(0)
    const [res,setRes] = useState('')
    let elementRef = useRef(null)
    useEffect(()=>{
        function HandleMouseMove(e){
            setPosY(e.clientY)
        }
        {window.addEventListener('mousemove',HandleMouseMove)}
        return () => window.removeEventListener('mousemove',HandleMouseMove)
    },[])

    useEffect(()=>{
        if(elementRef.current < posY){
            setRes('down')
        }else if(elementRef.current > posY){
            setRes('up')
        }
        elementRef.current = posY
    },[posY])
  return (
    <>
    <p>posY:{posY}</p>
    <p>useRef:{elementRef.current}</p>
    <p>Result:{res}</p>
    </>
)
}

export default Scroll