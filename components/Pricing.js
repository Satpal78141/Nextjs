import React from 'react'
import featureStyle from '../styles/Feature.module.css';
import pricing_Data from '../public/pricing_data.json'


function List({ item }) {
    let IsArray = [];
    if (item.main_feature != undefined) {
        item.main_feature.map((i) => IsArray.push(<li className='font-bold'><i class={`fa-solid fa-check mr-2 ${featureStyle.check}`}></i> {i}</li>))
    }

    if (item.features != undefined) {
        item.features.map((i) => IsArray.push(<li><i class={`fa-solid fa-check mr-2 ${featureStyle.check}`}></i> {i}</li>))
    }
    if (item.cross_features != undefined) {
        item.cross_features.map((i) => IsArray.push(<li><i class="fa-solid fa-xmark text-grey mr-2"></i> {i}</li>))
    }
    if (item.upcoming_features != undefined) {
        item.upcoming_features.map((i) => IsArray.push(<li><i class={`fa-solid fa-check mr-2 ${featureStyle.check}`}></i> {i} <span className={featureStyle.smallFont}>soon</span></li>))
    }
    return IsArray;

}

const Pricing = () => {
    return (
        <div className={`${featureStyle.underDiv1} `} id="pricing">
            <div className='mb-10'>
                <p className={`${featureStyle.heading} text-center`}>Simplified Pricing</p>
                <p className='text-grey text-center mt-2 '>Pay once a year, cancel anytime</p>
            </div>
            <div className='flex'>
                {pricing_Data.map((item) => {
                    return (
                        <div className={featureStyle.card}>
                            <div className={item.id == 2 ? `${featureStyle.heading_section} ${featureStyle.bgColor}  text-white` : featureStyle.heading_section}>
                                <p className={featureStyle.heading}>{item.title}</p>
                                <p className={`mt-2 mb-4 ${featureStyle.pricing_subtitle}`}>{item.sub_title}</p>
                                <div className={featureStyle.price}>
                                    <div className={`flex mb-4 ${featureStyle.fontSize_big}`}>{item.price} <div className={item.id != 2 ? ` ml-2 text-grey ${featureStyle.time_size}` : ` ml-2 text-white ${featureStyle.time_size}`}>{` ${item.time} `}</div></div>
                                </div>
                            </div>
                            <ul>
                                <List item={item} />
                            </ul>
                            <div className={item.id == 2 ? `text-white ${featureStyle.proId} ${featureStyle.button}`:` ${featureStyle.Id} ${featureStyle.button}` }>
                                <button> Get started with {item.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Pricing







{/*   <div className={`${featureStyle.underDiv1}`}>
                <p className={`${featureStyle.heading} text-center`}>Simplified Pricing</p>
                <p className='text-grey text-center'>Pay once a year, cancel anytime</p>
                
            </div>
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
                            <li>  Unlimited Subscriptions</li>
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
                </div> */}