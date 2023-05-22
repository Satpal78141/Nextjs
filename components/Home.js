import React from 'react'
import HomeStyle from '../styles/Home.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Feature from './Feature';

const Main = () => {
    React.useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div >
            <div className={`flex ${HomeStyle.transparent} `}>
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain}>
                        <div className={`${HomeStyle.box} ${HomeStyle.top}`}></div>
                    </div>
                </div>
                <img src='https://www.subly.app/spotify.png' className={`w-10 h-10 float-left ${HomeStyle.transformImg} `}  />
                <img src='https://www.subly.app/dropbox.png' className={`w-10 rounded-full ${HomeStyle.left} ${HomeStyle.transformImg}`}  />
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.contain4}>
                        <div className={`${HomeStyle.box4} ${HomeStyle.top4}`}></div>
                    </div>
                </div>
            </div>
            <h1 className={`text-center ${HomeStyle.HeadingSize}`}>All your subscriptions in one place</h1>
            <div className={`flex p-12 ${HomeStyle.headingSection}`}>
                <img src='https://www.subly.app/netflix.png' className={`rounded-full ${HomeStyle.marginleft} ${HomeStyle.transformImg}`} />
                <div className={HomeStyle.wrapper}>
                        <div className={HomeStyle.contain2}>
                            <div className={`${HomeStyle.box2} ${HomeStyle.top2}`}>

                            </div>
                        </div>
                    </div>
                <div className={`text-grey ${HomeStyle.fontSize}`}>Subly helps you take control over your subscriptions.
                <br />
                    <button onClick={() => window.location.href = "https://web.subly.app/signup"} className={HomeStyle.getStartButton}> Get started for free</button>
                    <button className={HomeStyle.learnMoreButton}> Learn More</button>
                </div>
                <div className={HomeStyle.wrapper}>
                        <div className={HomeStyle.contain3}>
                            <div className={`${HomeStyle.box3} ${HomeStyle.top3}`}>
                            </div>
                        </div>
                    </div>
                <img src='https://www.subly.app/hulu.png' className={`rounded-full ${HomeStyle.imgWidth} ${HomeStyle.transformImg}`} />
                
                

            </div>
            <div className={`flex ${HomeStyle.icon}`}>
            <img src='https://www.subly.app/gsuite.png' className={`w-12 h-10 rounded-full ${HomeStyle.googleIcon} ${HomeStyle.transformImg}`} />
                <img src='https://www.subly.app/primevideo.png' className={`w-12 h-10 rounded-full ${HomeStyle.primeVideoIcon} ${HomeStyle.transformImg}`} />
            </div>

            <div className='flex'>
                <img className={HomeStyle.reportImg} src='https://www.subly.app/main.png' data-aos="fade-up"/>
                <div className={HomeStyle.wrapper}>
                        <div className={HomeStyle.contain5}>
                            <div className={`${HomeStyle.box5} ${HomeStyle.top5}`}>
                            </div>
                        </div>
                    </div>
            </div>
            <Feature />
        </div>
    )
}

export default Main
