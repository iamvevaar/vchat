import React from 'react'
import AVATAR from "../assets/avatar.jpg"

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder="Search The User"/>
      </div>
      <div className="userChat">
        <img src={AVATAR} alt="" />
        <div className="userChatInfo">
          <span>Gautam</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search