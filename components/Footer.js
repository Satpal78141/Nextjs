import Link from 'next/link'
import React from 'react'
import footerData from '../public/footerData.json'
import footer from '../styles/footer.module.css'
const Footer = () => {
    return (
        <div className={footer.back_color}>
            <footer className={`flex ${footer.footer}`}>
                <div className={footer.section}>
                    <div className='flex'><img src='https://www.subly.app/logo.svg' className={`mr-2 w-5 h-10 ${footer.logo}`} /><p className={footer.heading}> Subly</p></div>
                    <p className='text-grey'>All your subscriptions and recurring payments in one place.</p>
                    <div className={`flex ${footer.icon_div}`}><button onClick={() => window.location.href = "https://twitter.com/sublyweb"}><i class="fa-brands fa-twitter"></i></button> <button className='ml-10' onClick={() => window.location.href = "https://www.buymeacoffee.com/emiliosanchez"}><i class="fa fa-cuo-togo w-5 h-5"></i></button>
                    </div>
                    
                </div>
                {footerData.map((item) => {
                    return (
                        <div className={footer.section} key={item.id}>
                            <p className={footer.heading}>{item.heading}</p>
                            <ul>
                                {item.sub_heading.map((sub_section) =>
                                    <li className='text-grey'><Link href={sub_section.link}>{sub_section.name}</Link></li>)}

                            </ul>
                        </div>
                    )

                })}
            </footer>
            <div className={`${footer.bottomsubly} text-grey`}>Subly - © 2023</div>
        </div>
    )
}

export default Footer
