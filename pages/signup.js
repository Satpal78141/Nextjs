import React from 'react'
import signUp_style from '../styles/signup.module.css';
import signupFeatures from '../public/signup_features.json'
import { db } from "../ProgramFile_firebase/firebase";
import { doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,updateProfile } from 'firebase/auth';
import { useParams } from 'react-router-dom';
import { Auth } from '../ProgramFile_firebase/firebase';



const Signup = () => {
  const [confirm_pasword, setConfirm_password] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState("");
  const { id } = useParams();
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })

  let value, name;

  const getuserdata = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  }



  const postData = (async (e) => {
    console.log(user)
    if (!user.email || !user.password) {
      console.log('user email error')
      setErrorMsg("Fill all fields");
    }
    else {
      setErrorMsg("");
      e.preventDefault();
      if (id) {
        console.log(id)
        await updateDoc(doc(db, "users", id), {
          ...user, updated_time: serverTimestamp(),
        }.then(() => {
        })
        )
      }
      else {
        console.log('id section works')
        createUserWithEmailAndPassword(Auth, user.email, user.password).then(async (res) => {
          const name = res.user;
          const docRef = doc(db, 'users', name.uid)

          await setDoc(docRef, {
            ...user, created_time: serverTimestamp(), Role: "User"
          })
          window.location.href = "/"
        })
          .catch((err) => {
            setErrorMsg(err.message);
          })

      }
    }
  })

  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const GoogleSignUpHandler = () => {
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


  React.useEffect(() => {
    if (user.email.length < 1) {
      document.getElementById('icon').style.display = "none";
      document.getElementById('icon1').style.display = "none";
      document.getElementById('label').style.display = "none";
      document.getElementById('label1').style.display = "none";
      document.getElementById('password').style.display = "none";
      document.getElementById('confirm_password').style.display = "none";
      document.getElementById('email').style.border = "1px solid #ff00003d";
    } else {
      document.getElementById('icon').style.display = "inline-block";
      document.getElementById('icon1').style.display = "inline-block";
      document.getElementById('label').style.display = "inline-block";
      document.getElementById('label1').style.display = "inline-block";
      document.getElementById('password').style.display = "inline-block";
      document.getElementById('confirm_password').style.display = "inline-block";
      document.getElementById('email').style.border = "1px solid #719ECE";

    }
    if (user.password.length > 0) {
      document.getElementById('password_error').style.display = 'block'
    } else {
      document.getElementById('password_error').style.display = 'none'
    }
  })

  return (
    <div className={`flex h-screen bg-white`}>
      <div className={`${signUp_style.sign_up}`}>

        <div className={`${signUp_style.logoDiv} flex`} onClick={() => window.location.href = "/"}>
          <img className='w-7 h-7 mt-4 mr-1 ml-2' src='https://www.subly.app/logo.svg' />
          <p className='mt-6 font-bold text-black '>Subly</p>
        </div>
        <div className={`flex ${signUp_style.flex} text-black`}>
          <div className={`${signUp_style.sign_up_Container} `}>
            <p className={`${signUp_style.heading} text-center`}>Get started with Subly</p>
            <p className={`font-light ${signUp_style.sub_title} `}>
              Join Subly for free. Already registered ?
              <a href='/login'> Login</a>
            </p>
            <button className={`${signUp_style.social} mt-7`} onClick={GoogleSignUpHandler}>
              <div className='flex justify-center'>
                <img className='w-6 h-6 ' src='https://web.subly.app/ic-google.svg' />
                <p className='ml-2 font-bold'> Sign up with Google</p>
              </div>
            </button>
            <button className={`${signUp_style.social} `}>
              <div className='flex justify-center'>
                <img className={`${signUp_style.social_apple} w-9 h-9`} src='https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg' />
                <p className={`font-bold`}>Sign in with Apple</p>
              </div>
            </button>
            <div className={`m-auto flex ${signUp_style.lineDiv} w-full`}>
              <hr className='w-28 mr-2 mt-10 ml-4' />
              <p className={`${signUp_style.text_grey} text-sm mt-8`}>Or signup with email</p>
              <hr className='ml-2 w-28 mt-10' />

            </div>
            <form className='mt-10' onSubmit={postData} >
              <label htmlFor="email">Email :</label> <br />
              <input className={`${signUp_style.input} mt-2`} type="email" id="email" name="email" placeholder='Enter your Email' required onChange={getuserdata} value={user.email} />

              <label id="label" htmlFor="password" >Password :</label> <br />
              <input className={`${signUp_style.input} mt-2 `} type="password" id="password" name="password" placeholder='Enter Password' required onChange={getuserdata} value={user.fname} />
              <i className={`far fa-eye ${signUp_style.far} text-grey`} id="icon" onClick={() => myFunction('password')} ></i>
              <p id='password_error' className='mb-3 text-grey text-sm'>(6-12 characters)</p>


              <label id="label1" htmlFor="confirm_password" >Confirm Password :</label> <br />
              <input onChange={(e) => setConfirm_password(e.target.value)} className={`${signUp_style.input} mt-2`} type="password" id="confirm_password" name="confirm_password" placeholder='Repeat Password' required />
              <i id="icon1" className={`far fa-eye text-grey ${signUp_style.far}`} onClick={() => myFunction('confirm_password')} ></i>


              <button className={`${signUp_style.create_ac}`} type='submit'>Create
                Account</button>
              <p className='text-center text-red mt-2'>{errorMsg}</p>
            </form>
            <p className='text-xs text-grey mt-8 text-center'>By registering, you accept our <a className={signUp_style.anchorStyle} href='/privacy'>Terms of use and Privacy Policy</a></p>
          </div>

        </div>
      </div>
      <div className={`${signUp_style.advantage_signup}`}>
        <div className={`flex ${signUp_style.flex}`}>
          <div>
            <p className={` ${signUp_style.heading}`}>Why you'll love Subly...
            </p>
            <ul className='mt-8'>
              {signupFeatures.map(item => {
                return (<div key={item.id} className='mt-4'>
                  <li className='flex'><i className={`fa-solid fa-check mt-2 ${signUp_style.checkStyle}`}></i> <p className='ml-4 font-bold text-lg' >{item.heading}</p></li>
                  <p className={`text-sm ${signUp_style.text_grey}`}>
                    {item.description}
                  </p>
                </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
