import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import { createContext, useState } from 'react'

export const ColorContext = createContext()

function App() {
  const [color, setColor] = useState('#fffff') 

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ColorContext.Provider>
  )
}

export default App
