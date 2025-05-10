import React, { useState, useRef, useEffect } from 'react';

const Count = ({ display, check }) => {
  const displayRef = useRef();
  const [value, setValue] = useState('');

  useEffect(() => {
    let textValue = displayRef.current.textContent
    setValue(textValue)
  }, [display]);

  return (
    <>
    <p
      ref={displayRef}
      className={`text-6xl ml-38 mt-10 absolute ${check ? 'text-green-600' : 'text-red-600'}`}
    >
      {display}
    </p>
    <p className='absolute bottom-50 text-2xl ml-25'>textValue is: {value}</p>
    </>
  );
};

export default Count;
