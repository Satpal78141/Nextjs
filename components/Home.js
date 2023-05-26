import React from 'react'
import HomeStyle from '../styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Feature from './Feature';
import Nav from './Nav';
import Footer from './Footer';
import Faq from './Faq';

const Main = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    function targetDiv(id){
       var elem=document.getElementById(id);
       elem?.scrollIntoView({
      behavior: "smooth",
    }); 
    }
    return (
        <div className={`m-auto ${HomeStyle.container} bg-white`} >
            <Nav />

            <div className={`flex ${HomeStyle.transparent} `}>
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain}>
                        <div className={`${HomeStyle.box} ${HomeStyle.top}`}></div>
                    </div>
                </div>
                <img src='https://www.subly.app/spotify.png' className={`w-10 h-10 rounded-full float-left`} data-aos="fade-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="1500" />
                <img src='https://www.subly.app/dropbox.png' className={`w-10 h-10 rounded-full ${HomeStyle.left} `} data-aos="fade-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="1500" />
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain4}>
                        <div className={`${HomeStyle.box4} ${HomeStyle.top4}`}></div>
                    </div>
                </div>
            </div>
            <h1 className={`text-center ${HomeStyle.HeadingSize}`}>All your subscriptions in one place</h1>
            <div className={`flex p-12 ${HomeStyle.headingSection}`}>
                <img src='https://www.subly.app/netflix.png' className={`rounded-full ${HomeStyle.marginleft}`} data-aos="fade-up"
                    data-aos-duration="3000" />
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain2}>
                        <div className={`${HomeStyle.box2} ${HomeStyle.top2}`}>

                        </div>
                    </div>
                </div>
                <div className={`text-grey ${HomeStyle.fontSize}`}>Subly helps you take control over your subscriptions.
                    <br />
                    <button className={HomeStyle.getStartButton}><a href='/signup'>Get started for free</a> </button>
                    <button onClick={()=>targetDiv("feature")} className={HomeStyle.learnMoreButton}> <a href='#feature'> Learn More</a> </button>
                </div>
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain3}>
                        <div className={`${HomeStyle.box3} ${HomeStyle.top3}`}>
                        </div>
                    </div>
                </div>
                <img src='https://www.subly.app/hulu.png' className={`rounded-full ${HomeStyle.imgWidth} `} data-aos="fade-up"
                    data-aos-duration="3000" />



            </div>
            <div className={`flex ${HomeStyle.icon}`}>
                <img src='https://www.subly.app/gsuite.png' className={`w-12 h-10 rounded-full ${HomeStyle.googleIcon}`} data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" />
                <img src='https://www.subly.app/primevideo.png' className={`w-12 h-10 rounded-full ${HomeStyle.primeVideoIcon} `} data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000" />
            </div>

            <div className={`${HomeStyle.wrapper} ${HomeStyle.margin_left}`}>
                <div className={HomeStyle.contain3}>
                    <div className={`${HomeStyle.box3} ${HomeStyle.top3} ${HomeStyle.size}`}>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <img className={HomeStyle.reportImg} src='https://www.subly.app/main.png' data-aos="fade-up" />
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain5}>
                        <div className={`${HomeStyle.box5} ${HomeStyle.top5}`}>
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <Faq />
            <Footer />
        </div>
    )
}

export default Main
