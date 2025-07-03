import React, { useState } from "react"
import Comp1 from "./components/comp1"
import { createContext } from "react"
export const textContext = createContext()

function App() {
  const [isClicked,setIsClicked] = useState(false)
  return (
    <>
    <textContext.Provider value={isClicked}>
      <button className="border cursor-pointer m-2" onClick={()=>setIsClicked(prev=>!prev)}>Click</button>
      <Comp1 Bool = {isClicked}/>
    </textContext.Provider>
    </>
  )
}

export default App
