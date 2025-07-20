import React from 'react';

// styles
import classes from "./page.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Feattures() {
  return (
    <div className={classes.main_container}>
        <section className={classes.hero_section}>
            <h1>Unlock the full potential of your Susu with Ahonyah Susu</h1>
            <h2>Discover powerful tools designed to make your group savings secure, transparent, and effortlessly managed</h2>
        </section>
       
       <section className={`${classes.features_section} ${classes.feature_one}`}>
            <div className={classes.features_text}>
                <h3>Smart Group Creation and Management</h3>
                <h4>Create and customize your susu group</h4>
                <p>
                    Set up your group in minutes. Define contributions, payout frequencies (daily, weekly, monthly),
                    and member limits. Our inituitive interface makes it easy to tailor rules to your group's unique
                    needs, ensuring a perfect fir for your traditional Susu model
                </p>
            </div>
            {/* <Image /> */}
       </section>

       <section className={`${classes.card} ${classes.features_two}`}>
            <div className={classes.features_text}>
                <h3>Automated Mobile Money Contribution and Payouts</h3>
                <h4>Seamless transactions with Mobile Money Automations</h4>
                <p>Say good bye to manual collections and chasing members! Our platform 
                    integrates with major Ghanaian Mobile Money Providers to automatically collectionscontributions
                    and disburse payouts, ensuring timely and accurate transfers.
                    Experience true financial convenience
                </p>
            </div>
            <Image />
       </section>

       <section className={`${classes.card} ${classes.features_two}`}>
            <div className={classes.features_text}>
                <h3>Robust  Member Vetting and Onboarding</h3>
                <h4>Build a trusted Susu Community</h4>
                <p>As a group administrator you have the power to vet potential group member
                    Our system supports your bavkground checks, allowing you to approve or reject applications
                    to maintain the integrity and trust within the group
                </p>
            </div>

            <Image />
       </section>

       <section className={`${classes.card} ${classes.features_two}`}>
            <div className={classes.features_text}>
                <h3>Transparent Financial Tracking and Reporting</h3>
                <h4>Real Time clarity for Every Transaction</h4>
                <p>Gain complete visibility over your group's finances.
                    Track every contribution, outstanding balance, and payouts in real time.
                    Detailed reports provide an auditable history, giving both members and administrators peace of mind

                </p>
            </div>
            <Image />
       </section>

       <section className={`${classes.card} ${classes.features_two}`}>
            <div className={classes.features_text}>
                <h3>Empowered Dispute Resolution System</h3>
                <h4>Resolve Issues with Confidence</h4>
                <p>Our built-in dispute resolutiontools empower group Administrators to effectively manage and resolve any issues that may arise.
                    Members can easily report concerns, and admins have access to communication tools, clear logging, and audit trails
                    for fair and transparent resolution.
                </p>
            </div>
            <Image />
       </section>

       <section className={`${classes.card} ${classes.features_two}`}>
            <div className={classes.features_text}>
                <h3>Secure and Compliant Platform</h3>
                <h4>Your Security Our Priority</h4>

                <p>Your financial date and personal information are protected by industry
                    -leading security measures, including robust database and authentication.
                    We are committed to adhering to Ghana's financial regulations and data protection laws, ensuring your peace of mind
                </p>
            </div>

            <Image/>
       </section>

       <section className={classes.cta_section}>
            <h2>Ready to See These Features in Action</h2>
            <h3>Start your journey towards smarter, more secure group savings today</h3>

            <button><Link href="/signup">Create your Free Account</Link></button>
       </section>
    </div>
  )
}
