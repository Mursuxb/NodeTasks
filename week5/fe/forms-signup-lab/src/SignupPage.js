import React from 'react'
import { useState } from 'react'
import './SignupPage.css'

export default function SignupPage() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [nationality, setNationality] = React.useState('')
    const [hello, setHello] = React.useState('')
    const [display, setDisplay] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (nationality === 'en') {
            setHello('Hello')
        } else if (nationality === 'de') {
            setHello('Hallo')
        } else if (nationality === 'fr') {
            setHello('Bonjour')
        }

        setDisplay(`Your email address is: ${email}`)


    }



    return (
        <div className='signup-container'>
            <h2>Signup</h2>

            <form onSubmit={onSubmit} className='signup-form'>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className='input' />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        id='password'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className='input' />
                </div>
                <div>
                    <label htmlFor='nationality'>Nationality:</label>
                    <select
                        name='nationality'
                        onChange={e => setNationality(e.target.value)}
                        value={nationality}
                    >
                        <option value='' disabled>
                            Select nationality
                        </option>
                        <option>en</option>
                        <option>de</option>
                        <option>fr</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
            <p>{hello}</p>
            <textarea
                id='display'
                name='display'
                value={display}
            />
        </div>
    )
}
