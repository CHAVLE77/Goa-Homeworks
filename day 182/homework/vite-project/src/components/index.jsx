import React, { useReducer, useState } from 'react'

const Index = () => {
    const [value,setValue] = useState('')

    
        const handleCheck = (state,action)=>{
        switch(action.type){
            case 'add':
                return{
                div:[...state.div,action.val],
                redo:[]
                }
            case 'undo':
                let last = state.div[state.div.length - 1]
                return{
                div:state.div.slice(0,-1),
                redo:[...state.redo,last]
                }
            case 'redo':
                let redoLast = state.redo[state.redo.length - 1]
                return{
                div:[...state.div,redoLast],
                redo:state.redo.slice(0,-1)
                }
        }
    }

    const [state,dispatch] = useReducer(handleCheck,{div:[],redo:[]})
    const handleClick = ()=>{
        if(value.length !==0){
            dispatch({type:'add',val:value})
        }
    }


  return (
    <>
    <input className='border m-2' onChange={(e)=>setValue(e.target.value)} type="text" placeholder='enter text' />
    <button onClick={handleClick} className='w-20 cursor-pointer h-7 bg-black text-white font-bold'>Enter</button>
    <div>
    <button onClick={()=>dispatch({type:'undo'})} className='m-2 border bg-red-500 hover:bg-red-600 text-white w-20 h-9 cursor-pointer'>undo</button>
    <button onClick={()=>dispatch({type:'redo'})} className='m-2 border bg-green-500 hover:bg-green-600 text-white w-20 h-9 cursor-pointer'>redo</button>
    </div>
    {state.div.map((el,index)=>(
        <p className='text-2xl m-2' key={index}>text:{el}</p>
    ))}
    </>
)
}

export default Index