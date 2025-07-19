import React from 'react'

// styles
import classes from "./PrimaryContactForm.module.css";

export default function PrimaryContactForm() {
  return (
    <div className={classes.form_container}>
        <form className={classes.primary_form}>
            <div className={classes.form_title}>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below nd our team will get back to you within five business hours</p>
            </div>
           

            <label>
                <span>Full Name: </span>
                <input 
                    type="text"
                    name="fName"
                    required
                />
            </label>

            <label>
                <span>Email: </span>
                <input 
                    type="email"
                    name="email"
                    required
                />
            </label>

            <label>
                <span>Phone number: </span>
                <input 
                    type="tel"
                    name="tel"
                    required
                />
            </label>

            <label>
                <span>Choose a Subject:</span>
                <select name="subject" id="subject">
                    <option value="general-inquiries">General inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </label>
    
            <label>
                <span>Your message: </span>
                <textarea />
            </label>

    {/* reCAPTCHA checkbox */}
            <div className={classes.checkbox}>
                <input
                    name="checkbox"
                    type="checkbox"
                />
                <span>I am not a robot</span>
            </div>

            <button className={classes.btn_primary}>Send message</button>
        </form>
    </div>
  )
}
