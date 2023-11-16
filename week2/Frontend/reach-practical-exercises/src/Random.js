import React from 'react'

function Random(props) {
    const min = props.min
    const max = props.max
    const random = Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <p className='box'>Random value between {min} and {max} ={">"} {random}</p>
  )
}

export default Random