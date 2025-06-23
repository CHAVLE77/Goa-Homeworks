import React,{useRef} from 'react'

const Scroll = () => {
    let elementRef = useRef(null)
    let elementRef2 = useRef(null)
    
    function handleClick(){
        elementRef.current.scrollIntoView({behavior:'smooth'})
    }
    function handleClick2(){
        elementRef2.current.scrollIntoView({behavior:'smooth'})
    }
  return (
    <>
    <div ref={elementRef2} onClick={handleClick} className='w-30 h-30 bg-black'></div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div  onClick={handleClick2} ref={elementRef} className='w-30 h-30 bg-red-500'></div>
    </>
)
}

export default Scroll