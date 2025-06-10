import React,{useState,useEffect} from 'react'
function App() {
  const [value,setValue] = useState(
    localStorage.getItem('value') || ''
  )
  const [wid,setWid] = useState('')
  useEffect(()=>{
    localStorage.setItem('value',value)
  },[value])
  useEffect(()=>{
    function getWidth(e){
      setWid(e.clientX)
    }
    window.addEventListener('mousemove',getWidth)
  },[])
  return (
    <>
    <input type="text" placeholder='enter text' value={value} onChange={(e)=>setValue(e.target.value)} className='border'/>
    <p>{wid}</p>
    </>
  )
}

export default App
