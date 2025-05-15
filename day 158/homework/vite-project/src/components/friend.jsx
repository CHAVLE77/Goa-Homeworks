import React from 'react';
import PropTypes from 'prop-types';

function Friend({ name, age, isOnline }) {
  return (
    <div style={{
      border: '1px solid #ccc', padding: '10px', margin: '10px',
      backgroundColor: isOnline ? '#e0ffe0' : '#ffe0e0'
    }}>
      <h3>{name}</h3>
      <p>ასაკი: {age}</p>
      <p>სტატუსი: {isOnline ? 'ონლაინშია' : 'ოფლაინშია'}</p>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
