import React,{useRef} from 'react'

const FormInfo = () => {

    const nameRef = useRef(null)
    const ageRef = useRef(null)
    let nameVal = ''
    let ageVal = ''

    function handleValue (){
         nameVal += nameRef.current.value
         ageVal += ageRef.current.value
        console.log('Name:', nameVal, 'Age:', ageVal)

    }
    function handleSubmit (e){
        e.preventDefault()
        if(!nameVal.trim() && !ageVal.trim()){
            nameRef.current.focus()
        }else if(nameVal.trim() && !ageVal.trim()){
            ageRef.current.focus()
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input ref={nameRef} onChange={handleValue} className='border block m-2' type="text"  placeholder='enter your name' />
        <input ref={ageRef} onChange={handleValue} className='border m-2' type="number" placeholder='enter your age'/>
        <button className='border m-2 block cursor-pointer' type='submit'>Submit</button>
    </form>
    </>
)
}

export default FormInfo