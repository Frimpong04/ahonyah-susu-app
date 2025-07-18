import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero_container}>
        <div className={styles.hero_text}>
          <h1>Digitize Your Susu, <br/>Grow Your Savings Together.</h1>
        
          <p>Securely manage your traditional rotating savings groups online, <br/> with automated contributions and trusted community tools</p>
        </div>

        <div className={styles.cta_container}>
          <button className={styles.cta}><Link href="./signup">Get started for Free</Link></button>
        </div>
          
       
        <p className={styles.small_print}>No hidden fees, Automated & Secure</p>
      </div>
    </div>
  );
}
