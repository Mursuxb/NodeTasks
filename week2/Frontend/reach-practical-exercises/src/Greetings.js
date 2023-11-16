import React from 'react'

function Greetings(props) {
    const lang = props.lang
    const children = props.children
    let greet = "Hello"
    if (lang === "de") {
        greet = "Hallo"
    } else if (lang === "fr") {
        greet = "Bonjour"
    }
  return (
    <p className='box'>{greet} {children} </p>
  )
}

export default Greetings