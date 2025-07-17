import React from 'react'
import AuthForm from '../AuthForm'

export default function Login() {
  return (
    <main className="form-container">
        <h2>Log in</h2>
        <p>Please enter your email and password to login</p>
        <AuthForm />
    </main>
  )
}
