import React from 'react'
import "./share.css"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';
import LabelIcon from '@mui/icons-material/Label';
import PermMediaIcon from '@mui/icons-material/PermMedia';
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assetes/person/1.jpeg" alt="" />
                <input type="text" placeholder="What's in your mind?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Feeling</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share