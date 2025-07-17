import React from 'react'
import AuthForm from '../AuthForm'

export default function SignUp() {
  return (
    <main className="form-container">
        <h2>Register</h2>
        <p>Please enter your email and password to register</p>

        <AuthForm />
    </main>
  )
}
