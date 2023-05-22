import React from 'react'
import featureStyle from '../styles/Feature.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    let myClass = 'fa fa-arrow-right';
    return (
        <div id="feature" className={`${featureStyle.feature}`}>
            <div className={`flex ${featureStyle.underDiv}`}>
                <div className={`${featureStyle.text}`} data-aos="fade-left">
                    <p className={featureStyle.heading}>Keep track of all your subscriptions</p>
                    <p className={featureStyle.text_text}>Subly brings all your subscriptions together in a single place so you never lose track of what you're paying for.</p>
                    <a href='https://web.subly.app/signup'>Get started for free  </a><i className={`${myClass}`}></i>
                </div>
                <div className={featureStyle.imgDiv} data-aos="fade-right">
                    <img className={featureStyle.img} src='https://www.subly.app/features1.png' />
                </div>

            </div>
            <div className={`flex ${featureStyle.underDiv} ${featureStyle.background_white}`}>
                <div className={featureStyle.imgDiv} data-aos="fade-left">
                    <img className={featureStyle.img} src='https://www.subly.app/insights.png' />
                </div>
                <div className={`${featureStyle.text}`} data-aos="fade-right">
                    <p className={featureStyle.heading}>Get insights of your costs</p>
                    <p className={featureStyle.text_text}>Get reports of your subscriptions to see were you are spending the most and how to improve.</p>
                    <a href='https://web.subly.app/signup'>Get started for free  </a><i className={`${myClass}`}></i>
                </div>
            </div>

            <div className={featureStyle.getstarted_container} data-aos="fade-up">
                <p className={featureStyle.getstarted_heading}>Get started today</p>
                <p className={featureStyle.getstarted_text}>Signup now and take back control over your subscriptions.</p>
                <button onClick={() => window.location.href = "https://web.subly.app/signup"} >Get started for free</button>

            </div>
            <p className={featureStyle.background_white1}></p>
            <div className={`flex ${featureStyle.underDiv}`}>
                <div className={`${featureStyle.text}`} data-aos="fade-left">
                    <p className={featureStyle.heading}>Never pay for an unwanted subscription again</p>
                    <p className={featureStyle.text_text}>Subly will remind you of upcoming payments before they hit your card so you're never caught off guard.</p>
                    <a href='https://web.subly.app/signup'>Get started for free  </a><i className={`${myClass}`}></i>
                </div>
                <div className={featureStyle.imgDiv} data-aos="fade-right">
                    <img className={featureStyle.img} src='https://www.subly.app/features3.png' />
                </div>
            </div>
            <div className={`flex ${featureStyle.underDiv} ${featureStyle.background_white}`}>
                <div className={featureStyle.imgDiv} data-aos="fade-left">
                    <img className={featureStyle.img} src='https://www.subly.app/features4.png' />
                </div>
                <div className={`${featureStyle.text}`} data-aos="fade-right">
                    <p className={featureStyle.heading}>Smart Recommendations</p>
                    <p className={featureStyle.text_text}>Subly provides alternatives to the services you're using, so you can determine if you're using the right solution or if there are better options.</p>
                    <a href='https://web.subly.app/signup'>Get started for free  </a><i className={`${myClass}`}></i>
                </div>
            </div>
            <div className={`${featureStyle.underDiv1}`}>
                <p className={`${featureStyle.heading} text-center`}>Simplified Pricing</p>
                <p className='text-grey text-center'>Pay once a year, cancel anytime</p>
                <div className='flex'>
                    <div className={featureStyle.card}>
                        <p className={featureStyle.heading}>Basic</p>
                        <p>Recommended for personal use</p>
                        <div className={`flex ${featureStyle.dollar} `}><p className={featureStyle.heading}>$ 0</p><p className='text-grey fs-1'> forever</p></div>
                        <ul>
                            <li> <i class="fa-solid fa-check"></i> Track 10 subscriptions</li>
                            <li> <i class="fa-solid fa-check"></i> Payment alerts</li>
                            <li> <i class="fa-solid fa-check"></i> Email Support 3-5 days</li>
                            <li> <i class="fa-solid fa-xmark text-grey"></i> Ad-free experience</li>
                            <li> <i class="fa-solid fa-xmark text-grey"></i> Projects</li>
                            <li> <i class="fa-solid fa-xmark text-grey"></i> Integrations</li>
                        </ul>
                        <button> Get started with Free</button>
                    </div>

                    <div className={featureStyle.card}>
                        <p className={featureStyle.heading}>Pro</p>
                        <p>Best for individuals with multiple projects and SMBs</p>
                        <div className='inline-flex'><p className={featureStyle.heading}>$ 39 </p><p className='text-grey fs-1'> / year</p></div>
                        <ul>
                            <li> <i class="fa-solid fa-check"></i> Unlimited Subscriptions</li>
                            <li> <i class="fa-solid fa-check"></i> 3 team members</li>
                            <li> <i class="fa-solid fa-check"></i> Priority Support</li>
                            <li> <i class="fa-solid fa-check"></i> Ad-free experience</li>
                            <li> <i class="fa-solid fa-check"></i> Projects</li>
                            <li> <i class="fa-solid fa-check"></i> Integrations</li>
                            <li> <i class="fa-solid fa-check"></i> API Access</li>
                            <li> <i class="fa-solid fa-check"></i> 2FA / MFA</li>
                        </ul>
                        <button> Get started with Pro</button>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
export default Feature
