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
    <div className='bg-white'>
      <nav className={navStyle.nav}>
        <ul>
          <li className={navStyle.logo_list}>
            <p onClick={()=>window.reload} className={`${navStyle.logo} cursor-pointer`}><img className="mr-2 w-5" src="https://www.subly.app/logo.svg"/>Subly</p>
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
            <button><a href="/signup">Signup</a></button>
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
