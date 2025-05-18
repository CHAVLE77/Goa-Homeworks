import React,{useState} from "react"

function App() {
  const [num,setNum] = useState(0)
  return (
    <>
    {Array(100).fill(<div>AAAAAAAAAA</div>)}
    {Array.from({length:100},(_)=>(
      <div>OOOOOOOOOOOOOOOOOOOOOOOOOOOOO</div>
    ))}
    {/* 2 */}
    {Array.from({length:100},(_,index)=>(
      <div key={index} className={`w-20 h-20 ${index % 2 !== 0 && 'bg-blue-500'} border`}>OOOOOOOOOOOOOOOOOOOOOOOOOOOOO</div>
    ))}
    {/* 4*/}
    {Array.from({length:20},(_,index)=>(
      <div key={index} onClick={()=>setNum(prev =>  index + prev )} className={`w-20 h-20  border`}>{num}</div>
    ))}
    </>
  )
}

export default App
