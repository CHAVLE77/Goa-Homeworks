import React from 'react';
import PropTypes from 'prop-types';
import Friend from './friend';

function FriendList({ friends }) {
  return (
    <div>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          name={friend.name}
          age={friend.age}
          isOnline={friend.isOnline}
        />
      ))}
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
