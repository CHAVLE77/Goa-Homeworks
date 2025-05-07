import React from 'react'
import Studentlist from './studentlist'
export const Studentcard = () => {
    let students = ['nika','16']
  return (
    <>
    <Studentlist students = {students}/>
    </>
)
}

export default Studentcard