import React, { FC, useState } from 'react'

import { InputGroup, Button } from '../components'
import { signInWithGoogle, auth } from '../firebase'

export const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clearForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleChange = e => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const login = async e => {
    e.preventDefault()

    try {
      const userInfo = await auth.signInWithEmailAndPassword(email, password)
      console.info(`You're now logged in: `, userInfo)
      clearForm()
    } catch (error) {
      console.warn(`Couldn't log in: ${error.message}`, error)
    }
  }

  return (
    <form onSubmit={login}>
      <InputGroup
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <InputGroup
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button mood="primary" type="submit">
          Login
        </Button>
        <Button mood="info" type="button" onClick={signInWithGoogle}>
          Login with Google
        </Button>
      </div>
    </form>
  )
}
