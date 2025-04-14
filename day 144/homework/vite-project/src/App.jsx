import { useState } from 'react'


function App() {
  const [value,setValue] = useState('')
  const [value2,setValue2] = useState('')
  const [display,setDisplay] = useState(0)

  function func(e){
    setValue(Number(e.target.value))
  }

  function func2(e){
    setValue2(Number(e.target.value))
  }
  function plus(){
    setDisplay(value + value2)
  }
  function minus(){
    setDisplay(value - value2)
  }
  function multiply(){
    setDisplay(value * value2)
  }
  function divide(){
    setDisplay(value / value2)
  }
  function reset(){
    setDisplay(0)
  }
  return (
    <>
    <div className='flex justify-center items-center h-80 gap-2'>
    <input type='number' className='w-30 h-10 border rounded-lg bg-neutral-800 text-white p-1' value={value} onChange={func}></input>
    <input type='number' className='w-30 h-10 border rounded-lg bg-neutral-800 text-white p-1' value={value2} onChange={func2}></input>
    </div>
    <div className='w-63 h-10 border rounded-lg m-auto mt-[-120px] bg-neutral-800 text-white text-[1.5rem] text-center' ><p>{display}</p></div>
    <div className='w-65 bg-stone-900 h-30 border rounded-lg m-auto mt-5 '>
      <button className='w-9 h-9 bg-orange-500 text-white text-[1.1rem]  border m-5 rounded-lg cursor-pointer' onClick={plus}>+</button>
      <button className='w-9 h-9 border rounded-lg cursor-pointer bg-orange-500 text-white text-[1.1rem]' onClick={minus}>-</button>
      <button className='w-9 h-9 border m-5 rounded-lg cursor-pointer bg-orange-500 text-white text-[1.1rem]' onClick={multiply}>*</button>
      <button className='w-9 h-9 border rounded-lg cursor-pointer bg-orange-500 text-white text-[1.1rem]' onClick={divide}>/</button>
      <button className='w-15 h-9 border ml-25 cursor-pointer rounded-lg bg-lime-600 text-white' onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App
