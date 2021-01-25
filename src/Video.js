import { Avatar } from '@material-ui/core'
import React from 'react'
import './Video.css'
function Video({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="video">
            <img className="video__thumbnail" src={image} alt=""/>
            <div className="video__info">
               <Avatar alt="" 
               className="video__avatar" src={channelImage}/>
               <div className="video__text">
                   <h4>{title}</h4>
                   <p>{channel}</p>
                   <p>
                       {views} . {timestamp}
                   </p>

               </div>
            </div>
        </div>
    )
}

export default Video
