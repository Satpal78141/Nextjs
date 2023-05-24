import React from 'react'
import faqData from '../public/faq_data.json'
import faq from '../styles/faqStyle.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Faq = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={faq.container_fluid} id="faq">
            <h1 className={faq.heading}> Frequently Asked Questions</h1>
            <div>
                {faqData.map(item => {
                    return (
                        <div className={faq.wrap_collabsible} data-aos="flip-up">
                            <input id={`collapsible${item.id}`} className={faq.toggle} type="checkbox" />
                            <label for={`collapsible${item.id}`} className={`${faq.lbl_toggle} font-bold`} tabindex="0">{item.que} </label>
                            <div className={faq.collapsible_content} data-aos="fade-up">
                                <div className={faq.content_inner}>
                                    {item.ans}
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Faq
