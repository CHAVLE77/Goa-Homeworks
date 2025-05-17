import React, { useState } from 'react';

export const Calculator = () => {
  const [value, setValue] = useState('');

  function func(e) {
    setValue(prev => prev + e);
  }

  function calc(){
    setValue(eval(value))
  }

  return (
    <>
      <div className='w-70 h-12 rounded-t-lg m-auto mt-40 border text-2xl text-right pr-3 pt-2'>
        {value}
      </div>
      <div className='w-70 h-70 border m-auto rounded-b-lg grid grid-cols-3'>
        <div onClick={() => func(0)} className='w-11 h-11 m-5 mt-7 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>0</p></div>
        <div onClick={() => func(9)} className='w-11 h-11 m-5 mt-7 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>9</p></div>
        <div onClick={() => func('-')} className='w-11 h-11 m-5 mt-7 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>-</p></div>
        <div onClick={() => func('+')} className='w-11 h-11 m-5 mt-7 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>+</p></div>
        <div onClick={() => func('%')} className='w-11 h-11 m-5 mt-7 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>%</p></div>
        <div onClick={() => func('*')} className='w-11 h-11 m-5 mt-7 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>*</p></div>
        <div onClick={() => setValue('')} className='w-11 h-11 m-5 mt-7 ml-14 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>C</p></div>
        <div onClick={calc} className='w-11 h-11 m-5 mt-7 ml-14 rounded-lg border cursor-pointer text-2xl text-center'><p className='mt-1'>=</p></div>
      </div>
    </>
  );
};

export default Calculator;
