import React from 'react'

import { Login, Register } from '../containers'

export const AuthPage = () => {
  return (
    <div className="container">
      <Login />
      <hr />
      <Register />
    </div>
  )
}
