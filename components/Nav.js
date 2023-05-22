import navStyle from '../styles/Nav.module.css';
import Link from 'next/link';
const Nav = () => {
  return (
    <div>  
    <nav className={navStyle.nav}>
      <ul>
        <li className={navStyle.logo_list}>
            <Link href="/" className={navStyle.logo}><img src="/logo.jpg" />Subly</Link>
        </li>
        <li >
            <Link href="#feature" className={navStyle.grey}>Features</Link>
        </li>
        <li>
            <Link href="#" className={navStyle.grey}>Pricing</Link>
        </li>
        <li >
            <Link href="#" className={navStyle.grey}>FAQ</Link>
        </li>
   <li className={navStyle.sign}>
    <button>Signup</button>
   </li>
   <li className={navStyle.login}> 
        <Link href="#" className={navStyle.grey}>Login</Link>
   </li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav
