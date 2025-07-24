import React from 'react'


// styles
import styles from "./page.module.css";
import Image from 'next/image';

// Image 
import Ahonyah from "../../public/ahonyah-black-logo.png"
import Friends from "../../public/images/Flux_Dev_A_warm_and_intimate_gathering_of_a_circle_of_trusted__0.jpg";
import Momo from "../../public/images/Flux_Dev_a_vibrant_and_dynamic_illustration_of_a_person_holdin_1.jpg"

export default function HowItWorks() {
  return (
    <main className={styles.container}>
        <section className={styles.title}>
            {/* <Image 
             src={Ahonyah}
             alt="ahonyah logo"
             width={150}
             quality={100}
            /> */}

            <div className={styles.title_text} >
                <h1>Your Susu, Simplified:</h1>
                <h2>How Ahonyah Works</h2>
            </div> 
        </section>
        

        <section className={`${styles.steps} ${styles.step_one}`}>
            <div className={styles.steps_item}>
                <div className={styles.steps_item_text}>
                    <div className={styles.span_container}><span>Step 1:</span></div>
                    <h2>Create or join your trusted circle</h2>
                    <p>Easily set up a new Susu group with your friends,
                     family, or colleagues.Define contributions amounts, 
                    frequency,and payout order. Or accept an invitation 
                    to join an existing group with our secure vetting system</p>
                </div>
                <div>
                    <Image  src={Friends} alt="friends image"/>
                </div>
            </div> 
        </section>

        <section className={`${styles.steps} ${styles.step_two}`}>
            <div className={`${styles.steps_item} ${styles.step_two_item}`}>
                <div className={styles.steps_item_text}>
                    <div className={styles.span_container}><span>Step 2:</span></div>
                    <h2>Automated Mobile Money Contribution</h2>
                    <p>Link your prefferred mobile money account (MTN, Telecel, AirtelTigo). 
                        Our platform automaticalley collects contributions on schedule, 
                        sending reminders and processing payments ecurely.
                        No more chasing for funds</p>
                </div>
                <Image  src={Momo} alt="mobile money photo"/>
            </div>    
        </section>

        <section className={`${styles.steps} ${styles.step_three}`}>
            <div className={styles.steps_item}>
                <div className={styles.steps_item_text}>
                    <div className={styles.span_container}><span>Step 3:</span></div>
                    <h2> Secure and Timely Payouts</h2>
                    <p>Receive your susu payouts directly to your Mobile Money account
                    on your scheduled date. Track every transaction with full transparency,
                    ensuring everyone gets their turn on time
                    </p>
                </div>
                <Image  src={Friends} alt="a photo of a group of friends"/>
            </div>
           
        </section>

        <section className={`${styles.steps} ${styles.step_four}`}>
            <div className={`${styles.steps_item} ${styles.step_four_item}`}>
                <div className={styles.steps_item_text}>
                    <div className={styles.span_container}><span>Step 4:</span></div>
                    <h2><span>Step 4:</span> Smart Management & Support for Admins</h2>
                    <p>Group Adminidtsrators gain powerful tols for members vetting
                    real-time contribution tracking, and a dedicated in-app system
                    for transparent dispute resolution. We empower you to lead
                    your group  with confidence</p>
                </div>
                <Image src={Momo} alt="a photo of a group of peopl"/>
            </div>
           
        </section>
    </main>
  )
}
