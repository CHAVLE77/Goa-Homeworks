import React from 'react'

 const Users = (props) => {
  return (
    <div className='w-80 m-auto h-100 border'>
        <p>{props.text.join(',')}</p>
    </div>
  )
}


export default Users