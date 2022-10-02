import React, { useState } from 'react'
import "../style.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate  , Link} from "react-router-dom";

const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='mainContainer'>
        <div className="formContainer">
            <span className="logo">VCHAT</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password' />
                <button>Login IN</button>
                {err && <span className='error'> Something Went Goes Wrong </span>}
            </form>
            <p className='desc'>You Don't Have An Account ?<Link to="/register"> Register </Link> </p>
        </div>
        
    </div>
  )
}

export default Login