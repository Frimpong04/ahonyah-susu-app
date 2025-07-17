"use client"

import React, { useEffect, useRef } from 'react'


// styles
import classes from "./AuthForm.module.css"
import { useActionState } from 'react';
import processAuthForm from '../actions';
import SubmitButton from '../components/SubmitButton';


// initial form state
const initialAuthFormState = {
    message: "",
    error: undefined,
    formFields: {
        email: "",
        password: ""
    }
}
export default function AuthForm() {
    const [state, formAction] = useActionState(processAuthForm, initialAuthFormState);

   const formRef =  useRef();

   useEffect(() => {
    if(state.message === "success") {
        formRef.current.reset();
    }
   }, [state])

  return (
    <form 
        className={classes.form_container} 
        action={formAction}
        ref={formRef}
    >
        <label>
            <span>Email: </span>
            <input
                name="email" 
                type="email"
                defaultValue={state.formFields?.email}
                // required
                className={state.error ? classes.error_input : ""}
            />
             { state.message === "email error" && <span className={classes.error}>{state.error.name}</span>}
        </label>
       
        <label>
            <span>Password: </span>
            <input 
                name="password"
                type="password"
                defaultValue={state.formFields?.password}
                // required
                className={state.error ? classes.error_input : ""}
            />
             {state.message === "password error" && <span className={classes.error}>{state.error.name}</span>}
        </label>
       
        <SubmitButton />
    </form>
  )
}
