import React,{useState} from 'react'

const Mainpage = () => {
    const [value,setValue] = useState('')
    const [value2,setValue2] = useState('')
    const [value3,setValue3] = useState('')
    const [concat,setConcat] = useState([])
    function handleClick(value,value2,value3){
        setConcat((prev)=>[...prev,{value,value2,value3}])
    }
    function deleteDiv(id){
        setConcat(concat.filter((_,curId)=>curId !== id))
    }
    return (
    <>
    <input onChange={(e)=>setValue(e.target.value)} className='border block m-2' placeholder='Name of expense' type="text" />
    <input onChange={(e)=>setValue2(e.target.value)} className='border m-2' placeholder='Amount' type="text" />
    <input onChange={(e)=>setValue3(e.target.value)} className='border m-2 block' placeholder='Date' type="text" />
    <button onClick={()=> handleClick(value,value2,value3)} className='border block m-2 w-20 h-7 cursor-pointer'>Submit</button>
    {concat.map((el,index)=>(
        <div className='w-full h-20 border m-0 mb-2' key={index}>
            <p>Name of expense:{el.value}₾</p>
            <p>Amount:{el.value2}₾</p>
            <b>Date:{el.value3}</b>
            <button onClick={()=>deleteDiv(index)} className='w-15 ml-2 cursor-pointer h-7 border-none bg-red-600 text-white'>Delete</button>
        </div>
    ))}
    </>
)
}

export default Mainpage