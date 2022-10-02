import React, { useState } from "react";
import "../style.scss";
import AVATARA from "../assets/avatar.jpg";
import { auth, db, storage } from "../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate , Link} from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading , setLoading]  = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // firebase is creating user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // create unique name image
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };  

  return (
    <div className="mainContainer">
      <div className="formContainer">
        <span className="logo">Vchat</span>
        <span className="title">Registeration</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Your Name" />
          <input required type="email" placeholder="Your Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AVATARA} alt="" />
            <span>Add An Avatar</span>
          </label>
          <button>Sign UP</button>
          {loading && "Please Wait"}
          {err && <span> Something Went Goes Wrong </span>}
        </form>
        <p>Don't Have An Account ?<Link to="/login"> LOGIN </Link></p>
      </div>
    </div>
  );
};

export default Register;
