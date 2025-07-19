import React from 'react'


// styles
import styles from "./page.module.css";
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <main className={styles.container}>
        <h1>Your Susu, Simplified: How Ahonyah Works</h1>

        <section className={`${styles.steps} ${styles.step_one}`}>
            <div>
                <h2><span>Step 1:</span> <br/>Create or join your trusted circle</h2>
                <p>Easily set up a new Susu group with your friends,<br/>
                family, or colleagues.Define contributions amounts, <br/>
                frequency,and payout order. Or accept an invitation <br/>
                to join an existing group with our secure vetting system</p>
            </div>
            {/* <Image /> */}

        </section>

        <section>
            <div>
                <h2> <span>Step 2:</span> Automated Mobile Money Contribution</h2>
                <p>Link your prefferred mobile money account (MTN, Telecel, AirtelTigo).<br/> 
                    Our platform automaticalley collects contributions on schedule,<br/> 
                    sending reminders and processing payments ecurely.<br/> 
                    No more chasing for funds</p>
            </div>
            {/* <Image/> */}
        </section>

        <section>
            <div>
                <h2><span>Step 3:</span> Secure and Timely Payouts</h2>
                <p>Receive your susu payouts directly to your Mobile Money account<br/>
                on your scheduled date. Track every transaction with full transparency,<br/>
                ensuring everyone gets their turn on time
                </p>
            </div>
            {/* <Image /> */}
        </section>

        <section>
            <div>
                <h2><span>Step 4:</span> Smar Management & Support for Admins</h2>
                <p>Group Adminidtsrators gain powerful tols for members vetting<br/>
                real-time contribution tracking, and a dedicated in-app system<br/>
                for transparent dispute resolution. We empower you to lead<br/>
                your group  with confidence</p>
            </div>
            {/* <Image /> */}
        </section>
    </main>
  )
}
