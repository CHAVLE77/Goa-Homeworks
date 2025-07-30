import React from 'react'
import { useParams } from 'react-router-dom'
const Result = () => {
    let {id} = useParams()
  return (
    <>
    <div>Result</div>
    <b>User Id is:{id}</b>
    </>
  )
}

export default Result