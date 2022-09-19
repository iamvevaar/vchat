import React from 'react'
import ATTACH from "../assets/attachment.png"
import IMAGE from "../assets/imageDoor.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" name="" id="" placeholder="Type Something.." />
      <div className="send">
        <img src={ATTACH} alt="" />
        <input type="file" name="" id="file" style={{display:"none"}}  />
        <label htmlFor="file">
          <img src={IMAGE} alt="" className='special' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input