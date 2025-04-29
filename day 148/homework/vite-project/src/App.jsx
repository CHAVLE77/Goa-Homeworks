import React, { useState } from 'react';
import Child from './components/child';
import Parent from './components/parent';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <Parent setName={setName} />
      <Child name={name} />
    </>
  );
}

export default App;
