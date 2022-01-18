import React from 'react'
import './register.css'

const Register = () => {
    return (
        <div className='login'>
           <div className="loginWrapper">
               <div className="loginLeft">
                   <h3 className="loginLogo">SirkudSocial</h3>
                   <span className="loginDesc">Connect with your friend all over the world</span>
               </div>
               <div className="loginRight">
                   <div className="loginBox">
                   <input placeholder="username" className="loginInput" />
                       <input placeholder="email" className="loginInput" />
                       <input placeholder="password" className="loginInput" />
                       <input placeholder="password again" className="loginInput" />
                       <button className='loginButton'>Register</button>
                     
                       <button className="loginRegisterButton">
                           Login.
                       </button>
                   </div>
               </div>
            </div>  
        </div>
    )
}

export default Register
