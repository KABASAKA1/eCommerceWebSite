import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
    return (
        <div className='loginSignup'>
            <div className="loginSignup-container">
                <h1>Sign Up</h1>
                <div className="loginSignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='E-Mail address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className='loginSignup-login'>Already have an account ?<span>Login here</span></p>
                <div className="loginSignup-agree">
                    <input type="checkbox" />
                    <p>By continuing , I agree to the terms of use & privacy policy. </p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignUp