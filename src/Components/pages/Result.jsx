import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = () => {
  const location = useLocation()
  return (
    <div>
      <p>{location.pathname}</p>
    </div>
  )
}

export default Result
