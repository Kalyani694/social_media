import React from 'react'
import "./online.css"
const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
    <div className="rightBarProfileImgcontainer">
      <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
         <span className="rightbarOnline"></span> 
         </div>
         <span className="rightbarUsername">{user.username}</span>
    
  </li>
  )
}

export default Online