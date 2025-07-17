import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
    const { pending } = useFormStatus()
  return (
   <button disabled={pending}>
    {pending ? "Submitting..." : "Submit"}
   </button>
  )
}
