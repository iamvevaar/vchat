import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext';
import Input from './Input'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import Messages from './Messages'
import { AuthContext } from '../context/AuthContext'
const Chat = () => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="maindata">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
      </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat