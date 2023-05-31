import Link from 'next/link'
import React from 'react'
import footerData from '../public/footerData.json'
import footer from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={footer.back_color}>
            <footer className={` ${footer.footer} ${footer.column}`}>
                <div className={`${footer.section}`}>
                    <div className='flex'><img src='https://www.subly.app/logo.svg' className={`mr-2 w-5 h-10 ${footer.logo}`} /><p className={footer.heading}> Subly</p></div>
                    <p className="text-dark_grey text-sm ">All your subscriptions and recurring payments in one place.</p>
                    <div className={`flex ${footer.icon_div}`}><button onClick={() => window.location.href = "https://twitter.com/sublyweb"}><i className={`fa-brands fa-twitter ${footer.text_grey}`}></i></button> 
                    <button className='ml-10' onClick={() => window.location.href = "https://www.buymeacoffee.com/emiliosanchez"}>
                        <img className={`w-5 h-4 ${footer.filter_green}`} src='/coffee_4.svg' /></button>
                    </div>
                    
                </div>
                <div className={footer.column}>
                {footerData.map((item ) => {
                    return (
                        <div className={`${footer.section}`} key={item.id}>
                            <p className={footer.heading}>{item.heading}</p>
                            <ul>
                                {item.sub_heading.map((sub_section , index) =>
                                    <li className={`text-dark_grey text-sm`} key={index}><Link href={sub_section.link}>{sub_section.name}</Link></li>)}

                            </ul>
                        </div>
                    )

                })}
                </div>
            </footer>
            <div className={`${footer.bottomsubly}`}>Subly - © 2023</div>
        </div>
    )
}

export default Footer
