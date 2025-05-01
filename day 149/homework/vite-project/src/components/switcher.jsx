import React from 'react'
import { useState } from 'react'
 const Switcher = () => {
    const [text,setText] = useState(true)
    function change() {
        let newMode = !text
        setText(newMode)
        document.body.style.backgroundColor = newMode ? 'white' : 'black'
    }
  return (
    <>
    <button onClick={change} className='w-20 h-7 bg-white cursor-pointer border m-1'>{text ? 'Dark' : 'Light'}</button>
    </>
)
}


export default Switcher
