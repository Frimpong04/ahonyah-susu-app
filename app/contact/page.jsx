import React from 'react'

// components
import PrimaryContactForm from '../components/PrimaryContactForm'

// styles
import classes from "./page.module.css";

export default function Contact() {
  return (
    <main className={classes.main_container}>
        <section className={classes.contact_heading}>
            <h1>Get In Touch With Ahonyah Susu</h1>
            <p>We are here to assist you. Whether you have a question<br/>
            need support, or want to provide feedback <br/>
            reach out to our team.
            </p>
        </section>
       
        <section className={classes.contact_form_section}>
           <PrimaryContactForm />
        </section>

        {/* <section>
            <h3>Other ways to connect</h3>
            <p><a href="mailTo:">Send us an email </a></p>
        </section> */}


    </main>
  )
}
