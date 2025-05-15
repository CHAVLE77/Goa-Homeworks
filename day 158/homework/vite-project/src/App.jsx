import React from 'react';
import FriendList from './components/friendList';

function App() {
  const friends = [
    { name: 'ლუკა', age: 18, isOnline: true },
    { name: 'მარიამი', age: 19, isOnline: false },
    { name: 'გიორგი', age: 17, isOnline: true },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🧑‍🤝‍🧑 მეგობრების სია</h1>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
