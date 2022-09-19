import React from 'react'
import AVATARA from "../assets/avatar.jpg"

const Message = () => {
  return (
    <div className='message owner'>
      
      <div className="messageInfo">
        <img src={AVATARA} alt="" />
        <span>just now</span>
      </div>

      <div className="messageContent">
        <p>hello</p>
        <img src={AVATARA} alt="" />
      </div>

    </div>
  )
}

export default Message