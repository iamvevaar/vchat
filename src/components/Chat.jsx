import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext';
import Input from './Input'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import Messages from './Messages'
import { AuthContext } from '../context/AuthContext'
import { FiLogOut } from 'react-icons/fi';
const Chat = () => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span className='reciever'>{data.user?.displayName}</span>
        <div className="maindata">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <FiLogOut className='logoutIcon' onClick={()=>signOut(auth)}/>
        </div>
      </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat

// 
