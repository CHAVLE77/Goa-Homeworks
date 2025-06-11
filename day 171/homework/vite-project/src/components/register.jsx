import React from 'react'

const Register = () => {
    const handleForm = (e)=>{
        e.preventDefault()
        let parent = e.currentTarget
        let formData = new FormData(parent)
        let name1 = formData.get('name')
        let pass = formData.get('password')
        let repeatPass = formData.get('repeat-password')
        localStorage.setItem('name',name1)
        localStorage.setItem('pass',pass)
        localStorage.setItem('repeatPass',repeatPass)
        alert('registered successfuly')
    }
  return (
    <>
    <form onSubmit={e=>handleForm(e)} className='w-80 h-90 border m-auto flex flex-col gap-5'>
        <input type="text" name='name' placeholder='name' className='border'/>
        <input type="password" name='password' placeholder='password' className='border'/>
        <input type="password" name='repeat-password' placeholder='repeat password' className='border'/>
        <button className='border cursor-pointer'>Submit</button>
    </form>
    </>
)
}

export default Register