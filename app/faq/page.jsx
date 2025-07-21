import Link from 'next/link'
import React from 'react'

// styles
import classes from "./page.module.css";

export default function Faq() {
  return (
    <main>
        <section>
            <div>
                <h1>Frequently Asked Questions</h1>
                <p>These are the fequently asked questions about Ahonyah Susu App.
                    Can't find what you are looking for? <Link href="/contact">Contact our support team</Link>
                </p>
            </div>
            <div>
                {/* image container */}
            </div>

        </section>

        <section>
            <div>
                {/* categories */}
                <p>Category 1: General Questions</p>
                <p>Category 2: Account and Security</p>
                <p>Category 3: Contributions and Payouts</p>
                <p>Category 4: Group Management</p>
                <p>Category 5: Technical Support</p>
            </div>
            <div>
                {/* questions in each category */}
                <div className={`${classes.faq_container} ${classes.cat_one}`}>
                    <h2>What is Susu and how does ahonyah enhance it?</h2>
                    <p>Susu is a traditional rotating savings and credit system common 
                        in Ghana. Ahonyah app digitizes this system, providing 
                        automatedmobile Money transaction, transparent record-keeping, 
                        secure group management, and dispute resolution tools to 
                        make your susu easier, safer and more efficient
                    </p>

                    <h2>Is Ahonyah avaolable outside Ghana?</h2>
                    <p>Currently Ahonyah ismdesigned specifically for users in Ghana, 
                        supporting local Mobile Money Networks, and financial regulations.
                        We plan to expand to other regions in future.

                    </p>

                    <h2>Is there a free to use susu app?</h2>
                    <p>Ahonyah offers a free trial with core features. For automated transactions 
                        and premium features, a small transaction fee(1% of contribution payout) 
                        or a subscription fee for advanced admin tools may apply. Details 
                        are transparently displayed before any charge

                    </p>
                </div>

                <div className={`${classes.faq_container} ${classes.cat_two}`}>
                    <h2>How do I create account?</h2>
                    <p>Click on the "sign Up" button on the home page. You will need to 
                        provide your name, email and phone number (Mobile money number) and create a password
                        You will be prompted to provide your Ghana card number for vetting and verification
                        as A KYC
                    </p>

                    <h2>Is my data and money safe with Ahonyah?</h2>
                    <p>Yes, your security is our top priority. We use secure encryprion
                        ,and adhere to strict data protection, and financial security standards
                        All transactiona are processed via secure Mobile Money gateways 
                    </p>

                    <h2>What is KYC and why do Ineed to provide my Ghana Card?</h2>
                    <p>KYC (Know your Customer) is a regulatory requirement for financial platforms to 
                        to verify user identities and to prevent fraud/money laundering. 
                        providing your Ghana card helps us to comply with Bank oF Ghana regulations,
                        and ensure the security and integrity of your susu group
                    </p>

                </div>

                <div className={`${classes.faq_container} ${classes.cat_three}`}>
                    <h2>How do automated contributions work ?</h2>
                    <p>Once you join a group and link your mobile money account,
                        contributions are automatically deducted on the agrreed_upon frequency. 
                        You will receive reminders before deductions, and confirmation after
                        successful payments
                    </p>

                    <h2>How do I receive my payouts?</h2>
                    <p>Your payouts will be automatically disbursed to your linked Mobile Money account
                        on your scheduled payout date as determined by group's rule. You will receive
                        a notification upon successful transfer
                    </p>

                    <h2>What happens if a contribution fails?</h2>
                    <p>If an automated contribution fails, e.g due to insufficeint funds,
                        you and your group administrator will be notified immediately. The platform will 
                        will provide options for manual retry or direct communication to
                        resolve the issue
                    </p>
                </div>

                <div className={`${classes.faq_container} ${classes.cat_four}`}>
                    <h2>What are the responsibilities of a group administrator ?</h2>
                    <p>Group adminstrators create and manage groups, vet new members, moinitor
                        contributions, and payouts, and handle dispute resolution wthin their groups
                         using the platform tools
                    </p>

                    <h2>How do I conduct background checks for new members as an Administrator ?</h2>
                    <p>When a user applies to join your group, their profile and Ghana card details will be available for your review 
                        in the 'Pending Members' section of your Admin Dashboard. You 
                        can then approve oir reject their application based on your checks
                    </p>

                    <h2>How does the dispute resolution ssystem work for Admins ?</h2>
                    <p>Admins receive notification for new disputes. They access a dedicated 
                        "Dispute Management" section in their dashboard to  view details, communicate
                         with parties, log actions, and mark disputes as resolved, maintaining a full audit trail
                    </p>


                </div>

                <div className={`${classes.faq_container} ${classes.cat_five}`}>
                    <h2>I am having trouble loggin, what should I do</h2>
                    <p>Try resetting your password using the "Forgot password" link 
                        on the login page. If the issues persist, please contact our support team via the 
                        contact page
                    </p>

                    <h2>My mobile money transaction did not go through, who do I contact ?</h2>
                    <p>First, check your mobile money balance and network. If the issues persist, contact
                        your group administrator through the app's dispute system. If it's a platform-level
                        issue, please contact the support
                    </p>
                </div>

            </div>
        </section>

        <section>
            <h2>Can't find your answer?</h2>
            <p>Our dedicated support team is here to help. Reach to us directly</p>
            <button><Link href="/contact">Contact Support</Link></button>
        </section>
    </main>
  )
}
