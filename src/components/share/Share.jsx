import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './share.css'

function Share() {
    return (
        <div className='share'>
           <div className="shareWrapper">
               <div className="shareTop">
                   <img src="assets/profileImage.jpg" alt="profile" className="shareProfilePics" />
                   <input placeholder='what is on your mind' className="shareInput" />
               </div>
               <hr className='shareHr'/>
               <div className="shareBottom">
                   <div className="shareOptions">
                      <div className="shareOption">
                          <PermMediaIcon htmlColor='tomato' className='shareMediaIcon' />
                          <span className="shareOptionText">Photo or Media</span>
                      </div>

                      <div className="shareOption">
                          <LabelIcon htmlColor='blue'className='shareMediaIcon' />
                          <span className="shareOptionText">Tag</span>
                      </div>

                      <div className="shareOption">
                          <RoomIcon htmlColor='green' className='shareMediaIcon' />
                          <span className="shareOptionText">Locaton</span>
                      </div>

                      <div className="shareOption">
                          <EmojiEmotionsIcon htmlColor='gold' className='shareMediaIcon' />
                          <span className="shareOptionText">Feelings</span>
                      </div>
                   </div>

                   <button className="shareButton">Share</button>
                 </div>
               </div> 
        </div>
    )
}

export default Share
