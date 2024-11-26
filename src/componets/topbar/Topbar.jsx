import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
function Topbar() {
  return (
    <div className='topbarConainer'>
      <div className="topbarleft">
        <div className="logo">Social</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className='searchbarIcon'/>
          <input type="text" placeholder='Search for friend, post or video' className="searchinput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlink">
          <span className="toplink">Home</span>
          <span className="toplinks">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <CircleNotificationsIcon/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assetes/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar