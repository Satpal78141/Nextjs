import React from 'react';
import navStyle from '../styles/Nav.module.css';
import Link from 'next/link';
import { useRef } from 'react';
const Nav = () => {
  const ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    console.log(elem)
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div>
      <nav className={navStyle.nav}>
        <ul>
          <li className={navStyle.logo_list}>
            <Link onClick={handleClick} href="/" className={navStyle.logo}><img src="/logo.jpg" />Subly</Link>
          </li>
          <li >
            <Link onClick={handleClick} href="#feature" className={navStyle.grey}>Features</Link>
          </li>
          <li>
            <Link onClick={handleClick} href="#pricing" className={navStyle.grey}>Pricing</Link>
          </li>
          <li >
            <Link onClick={handleClick} href="#faq" className={navStyle.grey}>FAQ</Link>
          </li>
          <li className={navStyle.sign}>
            <button onClick={() => { window.location.href = "/signup" }}>Signup</button>
          </li>
          <li className={navStyle.login}>
            <Link href="/login" className={navStyle.grey}>Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
