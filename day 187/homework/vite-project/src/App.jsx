import React from "react"
import Index from "./components";
function App() {
  const words = Array.from({ length: 10000 }, (_, i) => `word-${i + 1}`);
  return (
    <>
    <Index words = {words}/>
    </>
  )
}

export default App
