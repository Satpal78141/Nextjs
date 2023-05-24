import React from 'react'
import signUp_style from '../styles/signup.module.css';
import signupFeatures from '../public/signup_features.json'

const Signup = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState('');
  const [confirm_pasword, setConfirm_password] = React.useState('')



  function myFunction(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  React.useEffect(() => {
    if (email.length < 1) {
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
    if (password.length > 0) {
      document.getElementById('password_error').style.display = 'block'
    } else {
      document.getElementById('password_error').style.display = 'none'
    }
  })

  function Onsubmit() {
    if (email.length == 0) {
    } else {

    }
  }

  return (
    <div className={`flex h-screen`}>
      <div className={`${signUp_style.sign_up}`}>

        <div className={`${signUp_style.logoDiv} flex`} onClick={() => window.location.href = "/"}>
          <img className='w-10 h-10 mt-3' src='/logo.jpg' />
          <p className='mt-6 font-bold  '>Subly</p>
        </div>
        <div className={`flex ${signUp_style.flex}`}>
          <div className={`${signUp_style.sign_up_Container} `}>
            <p className={`${signUp_style.heading}`}>Get started with Subly</p>
            <p className={`font-light ${signUp_style.sub_title} `}>Join Subly for free. Already registered ? <a href='/login'> Login</a></p>
            <button className={`${signUp_style.social} mt-7`} onClick={() => window.location.href = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=897638869934-9ubtdignu54jch4oetckp0d27ajrgvfp.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Folqusypvbnvlyxibpbcg.supabase.co%2Fauth%2Fv1%2Fcallback&response_type=code&scope=email%20profile&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ5MjEyMjIsInNpdGVfdXJsIjoiaHR0cHM6Ly93ZWIuc3VibHkuYXBwIiwiaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJmdW5jdGlvbl9ob29rcyI6bnVsbCwicHJvdmlkZXIiOiJnb29nbGUiLCJyZWZlcnJlciI6Imh0dHBzOi8vd2ViLnN1Ymx5LmFwcCIsImZsb3dfc3RhdGVfaWQiOiIifQ.RearROX2uQVXciF5jH4dFCpSwo9I9kdxcp9xaghUpNg&service=lso&o2v=1&flowName=GeneralOAuthFlow"}><div className='flex'><img className='w-6 h-6' src='https://web.subly.app/ic-google.svg' /><p className='ml-2 font-bold'> Sign up with Google</p></div></button>
            <button className={`${signUp_style.social} `} onClick={() => window.location.href = "https://appleid.apple.com/auth/authorize?client_id=web.app.subly.subly&redirect_uri=https%3A%2F%2Folqusypvbnvlyxibpbcg.supabase.co%2Fauth%2Fv1%2Fcallback&response_mode=form_post&response_type=code&scope=email+name&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ5MjEzMjQsInNpdGVfdXJsIjoiaHR0cHM6Ly93ZWIuc3VibHkuYXBwIiwiaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJmdW5jdGlvbl9ob29rcyI6bnVsbCwicHJvdmlkZXIiOiJhcHBsZSIsInJlZmVycmVyIjoiaHR0cHM6Ly93ZWIuc3VibHkuYXBwIiwiZmxvd19zdGF0ZV9pZCI6IiJ9.zsY1b_GF-91tIyCXh63NYG8ico0CznMSGW24Lx4l3sc"}><div className='flex'><img className={`${signUp_style.social_apple} w-9 h-9`} src='https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg' /> <p className='font-bold'>Sign in with Apple</p></div></button>
            <div className={`m-auto flex ${signUp_style.lineDiv}`}><hr className='w-28 mr-2 mt-10 ml-4' /><p className='text-grey text-sm mt-8'>Or signup with email</p><hr className='ml-2 w-28 mt-10' />

            </div>
            <form className='mt-10' onChange={() => Onsubmit()}>
              <label for="email">Email :</label> <br />
              <input onChange={(e) => setEmail(e.target.value)} className={`${signUp_style.input} mt-2`} type="email" id="email" name="email" placeholder='Enter your Email' required />

              <label id="label" for="password" >Password :</label> <br />
              <input onChange={(e) => setPassword(e.target.value)} className={`${signUp_style.input} mt-2 `} type="password" id="password" name="password" placeholder='Enter Password' required />
              <i className={`far fa-eye ${signUp_style.far} text-grey`} id="icon" onClick={() => myFunction('password')} ></i>
              <p id='password_error' className='mb-5 text-grey text-sm'>(6-12 characters)</p>
              

              <label id="label1" for="confirm_password" >Confirm Password :</label> <br />
              <input onChange={(e) => setConfirm_password(e.target.value)} className={`${signUp_style.input} mt-2`} type="password" id="confirm_password" name="confirm_password" placeholder='Repeat Password' required />
              <i id="icon1" className={`far fa-eye text-grey ${signUp_style.far}`} onClick={() => myFunction('confirm_password')} ></i>
              

              <button className={`${signUp_style.create_ac}`} type='submit'>Create
                Account</button>
            </form>
            <p className='text-xs text-grey mt-8 text-center'>By registering, you accept our <a className={signUp_style.anchorStyle} href=''>Terms of use and Privacy Policy</a></p>
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
                return (<div className='mt-4'>
                  <li className='flex'><i class={`fa-solid fa-check mt-2 ${signUp_style.checkStyle}`}></i> <p className='ml-4 font-bold text-lg' >{item.heading}</p></li>
                  <p className='text-sm text-grey'>
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
