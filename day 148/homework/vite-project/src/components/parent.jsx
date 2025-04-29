import React from 'react';

function Parent({ setName }) {
  return (
    <>
      <input
        type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default Parent;
