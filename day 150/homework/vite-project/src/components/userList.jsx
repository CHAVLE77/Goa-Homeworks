import React, { useState } from 'react';

const UserList = (props) => {
  let info = ['name1', 'name2', 'name3', 'name4', 'name5'];
  const [check, setCheck] = useState(false);

  function func() {
    setCheck(!check);
  }

  return (
    <>
      <button onClick={() => props.callback()} className='w-25 h-7 cursor-pointer m-2 border'>
        Click
      </button>
      <button onClick={func} className='w-25 h-7 cursor-pointer m-2 border'>
        {check ? 'Clear' : 'Click to List'}
      </button>

      {check ? (
        <ul>
          {info.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default UserList;
