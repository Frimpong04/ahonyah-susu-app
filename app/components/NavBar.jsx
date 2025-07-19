"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// images
import Logo from "../../public/ahonyah-black-bg.png";

// styles
import classes from "./NavBar.module.css";
import { usePathname } from 'next/navigation';

export default function NavBar() {

  const path = usePathname();

  return (
    <div className={classes.nav_container}>
        <nav className={classes.nav_items}>
  
            <Link href="./">
                <Image 
                    src={Logo}
                    alt="ahonyah logo"
                    width={70}
                    quality={100}
                />
            </Link>
            <div className={classes.pages_links}>

                <Link href="/how-it-works" className={path === "/how-it-works" ? classes.active : classes.inactive}>How It Works</Link>
                <Link href="/features" className={path === "/features" ? classes.active : classes.inactive}>Features</Link>
                <Link href="/faq" className={path === "/faq" ? classes.active : classes.inactive}>FAQ</Link>
                <Link href="/contact" className={path === "/contact" ? classes.active : classes.inactive}>Contact Us</Link>

            </div>
            {/* links */}
            <div className={classes.auth_links}>
                <Link href="/signup">Get Started Now</Link>
             </div>      
        </nav>
    </div>
  )
}
