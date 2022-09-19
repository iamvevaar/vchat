import React from 'react'
import "../style.scss";

const Login = () => {
  return (
    <div className='mainContainer'>
        <div className="formContainer">
            <span className="logo">Vchat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='Your Email' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <button>Login IN</button>
            </form>
            <p>You Don't Have An Account ? Register</p>
        </div>
        
    </div>
  )
}

export default Login