import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId} = useParams()
  return (
    <div className='text-4xl text-center p-8 bg-orange-300 '>User : {UserId}</div>
  )
}

export default User