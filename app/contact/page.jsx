import React from 'react'

// icons
import { IoLogoFacebook } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandLinkedinFilled } from "react-icons/tb";

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
           <section className={classes.other_contact_options}>
                <div className={`${classes.email_direct} ${classes.other_contact}`}>
                    <p><a href="mailTo:executivekfb27@gmail.com">Send us an email </a></p>
                </div>
               <div className={`${classes.other_contact} ${classes.hotline}`}>
                   
                    <p>Call us: 020 739 1554</p>
               </div>
                
            </section>
            <section className={classes.social_media_links}>
                <IoLogoFacebook />
                <BiLogoInstagramAlt />
                <BsTwitterX />
                <TbBrandLinkedinFilled />
            </section>
        </section>

        

    </main>
  )
}
