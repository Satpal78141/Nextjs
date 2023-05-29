import React from 'react'
import signUp_style from '../styles/signup.module.css';


const Reset = () => {
  return (
    <div className={`flex h-screen bg-white`}>

    <div className={`${signUp_style.logoDiv} flex `} onClick={() => window.location.href = "/"}>
    <img className='w-7 h-7 mt-4 mr-1 ml-2' src='https://www.subly.app/logo.svg' />
        <p className='mt-6 font-bold  '>Subly</p>
    </div>
    <div className={`flex ${signUp_style.flex} m-auto`}>
      <div className={`${signUp_style.sign_up_Container} `}>
        <p className={`${signUp_style.heading} text-center`}>Reset Password</p>
        <p className='text-center text-sm mt-2 mb-3'> Enter the email associated with your Subly account and you'll receive instructions to reset you password.</p>
        <label for="email" className='text-sm	fw-500' >Email </label>
        <br />
        <input type='email' name="email" placeholder='Enter your Email' className={`mt-1 ${signUp_style.input} w-full p-1 ps-8`} />
        <button className={`${signUp_style.button} mt-3 w-full`}> Reset Password</button>

        <p className={`mt-3 text-sm ${signUp_style.anchor}`} ><a href='/login'>Wait, I remember my password</a></p>    
    </div>
    </div>
    </div>
  )
}

export default Reset
