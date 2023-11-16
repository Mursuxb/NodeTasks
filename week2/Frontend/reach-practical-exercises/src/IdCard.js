import React from 'react'

function IdCard(props) {
    const lastName = props.lastName
    const  firstName = props.firstName
    const gender = props.gender
    const height = props.height
    const birth = props.birth.toDateString()
    const picture = props.picture

  return (
    <div className='IdCard box'>
    <img src={picture} alt="profile" />
    <div className='right'>
        <p><strong>First name: </strong>{firstName}</p>
        <p><strong>Last name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{height}</p>
        <p><strong>Birth: </strong>{birth}</p>
    </div>
    </div> 
  )
}

export default IdCard