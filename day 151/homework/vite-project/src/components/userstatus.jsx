import React from 'react'

export const Userstatus = ({loggedIn}) => {
  return (
    <>
    <p>{loggedIn.toLowerCase() === 'true' ? "Welcome back" : "Please Register"}</p>
    </>
  )
}
export default Userstatus
