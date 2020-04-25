import React, { FC, useState } from 'react'

import { InputGroup, Button } from '../components'
import { auth, createUserProfileDoc } from '../firebase'

export const Register: FC = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'repeatPassword':
        setRepeatPassword(value)
        break
      case 'displayName':
        setDisplayName(value)
        break
      default:
        break
    }
  }

  const isFormValid = () => {
    return (
      password === repeatPassword &&
      password.length &&
      email.length &&
      displayName.length
    )
  }

  const resetForm = () => {
    setDisplayName('')
    setEmail('')
    setPassword('')
    setRepeatPassword('')
  }

  const register = async e => {
    e.preventDefault()

    if (!isFormValid()) {
      alert('Form is not valid')
      return
    }
    console.groupCollapsed('Register')
    console.log('Display name: ', displayName)
    console.log('Email: ', email)
    console.log('Password: ', password)
    console.groupEnd()

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      createUserProfileDoc(user, { displayName })
      resetForm()
    } catch (error) {
      console.warn(error.message)
    }
  }

  return (
    <form onSubmit={register}>
      <InputGroup
        label="Display Name"
        type="text"
        name="displayName"
        value={displayName}
        onChange={handleChange}
        required
      />
      <InputGroup
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <InputGroup
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <InputGroup
        label="Password"
        type="password"
        name="repeatPassword"
        value={repeatPassword}
        onChange={handleChange}
        required
      />
      <Button mood="primary" type="submit" disabled={!isFormValid()}>
        Register
      </Button>
    </form>
  )
}
