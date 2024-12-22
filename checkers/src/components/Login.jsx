import React, { useState } from 'react'

export default function Login() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function startGame() {
        console.log(name, email)
    }

    return (
        <div>
            <h1>Hey user, enter your credentials...</h1>

            <span>
                <label htmlFor="">full name: </label>
                <input value={name} onChange={e => setName(e.target.value)} type="text" />
            </span>

            <span>
                <label htmlFor="">email: </label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
            </span>

            <button onClick={startGame}>Start Game</button>

        </div>
    )
}
