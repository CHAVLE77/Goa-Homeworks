import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [value, setValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== repeatValue) {
      alert('Registration failed: passwords do not match');
    } else {
      navigate('/main');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className='border' type="text" placeholder='Name' />
        <input className='border' type="email" placeholder='Email' />
        <input className='border'type="password"onChange={(e) => setValue(e.target.value)}placeholder='Password'
        />
        <input className='border' type="password" onChange={(e) => setRepeatValue(e.target.value)} placeholder='Repeat Password'/>
        <button type="submit" className='border'>Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
