import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name1,useName] = useState('name') 
  return (
    <>
    <p onClick={() => setCount(el => el+1)}>count is {count}</p>
    <p>{name1}</p>
    <button className='w-20 h-5 border-2' onClick={()=>useName('name2')}></button>
    </>
  )
}

export default App
