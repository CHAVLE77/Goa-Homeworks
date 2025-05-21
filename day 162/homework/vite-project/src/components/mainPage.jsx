import React,{useState} from 'react'
const MainPage = () => {
    const [value,setValue] = useState('')
    const [value2,setValue2] = useState('')
    const [arr,setArr] = useState([])
    function add(){
        if(value2)
        setArr([...arr,value2])
    }
  return (
    <>
    <input className='border block m-2' onChange={(e)=>setValue(e.target.value)}type="text" placeholder='enter name'/>
    <input className='border block m-2' onChange={(e)=>setValue2(e.target.value)} type="text" placeholder='enter info'/>
    <button className='border m-2 cursor-pointer w-20 h-7' onClick={add}>Click</button>
    {arr.map((el,index)=>(
        <div key={index} className='w-full h-10 border'>{el}</div>
    ))}
    </>
)
}

export default MainPage