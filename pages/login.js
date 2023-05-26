import React from 'react'
import signUp_style from '../styles/signup.module.css';
import { Auth, db } from '../ProgramFile_firebase/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const login = () => {

  // states for store errors and required Values

  const [errorMsg, setErrorMsg] = React.useState('');
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  })

  let name, value;

    function myFunction(id) {
        var x = document.getElementById(id);
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
      const getdata = (event) => {
        name = event.target.name;
        value = event.target.value;
        setValues({ ...values, [name]: value })
      }
    
    
      // Login function to user Login
    
      const loginUser = () => {

        if (!values.email || !values.password) {
          setErrorMsg('Fill All Fields')
        } setErrorMsg('')
        signInWithEmailAndPassword(Auth, values.email, values.password).then(async (res) => {
         return window.location.href="/singup";
        }).catch((err) => {
          setErrorMsg(err.message)
        })
      }
    
      const GoogleLoginHandler = () => {
        var provider = new GoogleAuthProvider();
        signInWithPopup(Auth, provider).then(async (res) => {
          let user = res.user;
          const docRef = doc(db, 'users', user.uid)
          let name = user.displayName;
          let data = {
            email: user.email,
            password: user.password || " ",
          }
          await setDoc(docRef, {
            ...data, created_time: serverTimestamp(), Role: "User"
          })
         window.location.href="/";
        }).catch((err) => {
          console.log(err)
        })
      }




  return (
    <div className={`flex h-screen bg-white`}>

      <div className={`${signUp_style.logoDiv} flex `} onClick={() => window.location.href = "/"}>
      <img className='w-7 h-7 mt-4 mr-1 ml-2' src='https://www.subly.app/logo.svg' />
          <p className='mt-6 font-bold  '>Subly</p>
      </div>
      <div className={`flex ${signUp_style.flex} m-auto`}>
        <div className={`${signUp_style.sign_up_Container} `}>
          <p className={`${signUp_style.heading}`}>Welcome back to Subly</p>
          <p className={`font-normal mt-3 mb-3 ${signUp_style.sub_title} `}>Don't have an account? <a href='/signup'> Signup</a></p>
          <button className={`${signUp_style.social} mt-7`} onClick={GoogleLoginHandler}><div className='flex'><img className='w-6 h-6' src='https://web.subly.app/ic-google.svg' /><p className='ml-2 font-bold'> Sign in with Google</p></div></button>
          <button className={`${signUp_style.social} `} onClick={() => window.location.href = "https://appleid.apple.com/auth/authorize?client_id=web.app.subly.subly&redirect_uri=https%3A%2F%2Folqusypvbnvlyxibpbcg.supabase.co%2Fauth%2Fv1%2Fcallback&response_mode=form_post&response_type=code&scope=email+name&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ5MjEzMjQsInNpdGVfdXJsIjoiaHR0cHM6Ly93ZWIuc3VibHkuYXBwIiwiaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJmdW5jdGlvbl9ob29rcyI6bnVsbCwicHJvdmlkZXIiOiJhcHBsZSIsInJlZmVycmVyIjoiaHR0cHM6Ly93ZWIuc3VibHkuYXBwIiwiZmxvd19zdGF0ZV9pZCI6IiJ9.zsY1b_GF-91tIyCXh63NYG8ico0CznMSGW24Lx4l3sc"}><div className='flex'><img className={`${signUp_style.social_apple} w-9 h-9`} src='https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg' /> <p className='font-bold'>Sign in with Apple</p></div></button>
          <div className={`m-auto flex ${signUp_style.lineDiv}`}><hr className='w-28 mr-2 mt-10 ml-6' /><p className={`${signUp_style.text_grey} text-sm mt-8 w-28 text-center`}>Or Login with email</p><hr className='ml-2 w-28 mt-10' />

          </div>
          <form className='mt-10' onSubmit={loginUser}>
            <label htmlFor="email">Email :</label> <br />
            <input className={`${signUp_style.input} mt-2`} type="email" id="login_email" name="email" placeholder='Enter your Email' onChange={getdata} value={values.email} required />

            <label id="label" htmlFor="password" >Password :</label> <br />
            <input  className={`${signUp_style.input} mt-2 `} type="password" id="login_password" name="password" onChange={getdata} value={values.password} placeholder='Enter Password' required />
            <i className={`far fa-eye ${signUp_style.far} text-grey`} id="icon" onClick={() => myFunction('login_password')} ></i>
           

            <button className={`${signUp_style.create_ac}`} type='submit'>Login</button>
          </form>
          <p className='text-xs text-grey mt-8 text-center'><a className={signUp_style.anchorStyles} href=''>Forgot your password?</a></p>
        </div>

    </div>
      
    </div>
  )
}

export default login
