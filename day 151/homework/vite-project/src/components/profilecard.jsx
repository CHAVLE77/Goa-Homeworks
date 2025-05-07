import React from 'react'
import { useState } from 'react'
export const Profilecard = ({avatar,name1,desc}) => {
    const [text,setText] = useState(false)
    function check(){
        setText(!text)
    }
  return (
    <>
    <div className='w-80 h-100 border m-auto mt-20 flex justify-center flex-row'>
        {avatar}
        <button onClick={check} className={`w-24 absolute h-7 mt-37 rounded-lg ${text ? 'bg-[#66FF66]' : 'bg-[#1877f2]'} cursor-pointer border text-white`}>{text ? 'Following' : 'Follow me'}</button>
        {name1}
        {desc}
    </div>
    </>
)
}

export default Profilecard
