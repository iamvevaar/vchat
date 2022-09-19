import React from 'react'
import "../style.scss";
import AVATARA from "../assets/avatar.jpg"

const Register = () => {
  return (
    <div className='mainContainer'>
        <div className="formContainer">
            <span className="logo">Vchat</span>
            <span className="title">Registeration</span>
            <form>
                <input type="text" placeholder='Your Name' name="" id="" />
                <input type="email" placeholder='Your Email' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file"><img src={AVATARA} alt="" />
                <span>Add An Avatar</span></label>
                <button>Sign UP</button>
            </form>
            <p>Don't Have An Account ? LOGIN</p>
        </div>
        
    </div>
  )
}

export default Register