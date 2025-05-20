import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate(); 

  function change(e) {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Registration successful');
    navigate('/mainpage'); 
  }

  return (
    <div className='w-80 h-100 border m-auto mt-40'>
      <h1 className='text-3xl text-center mt-5'>Sign up</h1>
      <form onSubmit={change} className='relative top-10 text-center'>
        <input onChange={(e) => setName(e.target.value)} className='w-70 h-8 border m-2 p-2' type="text" placeholder='Name' />
        <input onChange={(e) => setEmail(e.target.value)} className='w-70 h-8 border m-2 p-2' type="email" placeholder='Email' />
        <input onChange={(e) => setPassword(e.target.value)} className='w-70 h-8 border m-2 p-2' type="password" placeholder='Password' />
        <input onChange={(e) => setRepeatPassword(e.target.value)} className='w-70 h-8 border m-2 p-2' type="password" placeholder='Repeat Password' />
        <button type='submit' className='w-40 h-10 cursor-pointer border-none text-white m-9 bg-blue-600 rounded-lg'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
