import React, { useEffect, useState, useTransition } from 'react'

const Index = ({words}) => {
    const [value,setValue] = useState('')
    const [filteredWords,setFilteredWords] = useState([])
    const [pending,startTransition] = useTransition()

    useEffect(()=>{

    startTransition(()=>{
        const filtered = words.filter((word)=>word.toLowerCase().startsWith(value.toLowerCase()))
        setFilteredWords(filtered)
    })

    },[value,words])
  return (
    <>
    <input className='border p-2' value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='enter text'/>
    {pending && <p>Loading...</p>}
    <ul>
        {filteredWords.slice(0, 100).map((word, index) => (
          <li key={index}>{word}</li>
        ))}
    </ul>
    </>
)
}

export default Index