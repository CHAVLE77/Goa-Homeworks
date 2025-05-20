import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const nameValue = localStorage.getItem('name');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const deleteAccount = () => {
    localStorage.clear();
    alert('Account deleted');
    navigate('/');
  };

  return (
    <>
      <p className='m-2 text-2xl'>Hello: {nameValue}</p>

      <button onClick={handleLogout} className='w-20 h-7 cursor-pointer border block m-2'>
        Log out
      </button>

      <button onClick={deleteAccount} className='w-30 h-7 cursor-pointer border block m-2'>
        Delete Account
      </button>
    </>
  );
};

export default Mainpage;
