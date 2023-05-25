import React from 'react'
import featureStyle from '../styles/Feature.module.css';
import pricing_Data from '../public/pricing_data.json'
import Link from 'next/link';


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
                            <div className={item.id == 2 ? `text-white ${featureStyle.proId} ${featureStyle.button}` : ` ${featureStyle.Id} ${featureStyle.button}`}>
                                <button><Link href='/signup'> Get started with {item.title}</Link></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Pricing
