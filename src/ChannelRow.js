import { Avatar } from '@material-ui/core'
import { CheckCircleOutlined } from '@material-ui/icons'
import React from 'react'

import './ChannelRow.css'
function ChannelRow({image,channel,subs,noOfVideo,verified,description}) {
    
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt="programming" src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlined/>}</h4>
                <p>
                    {subs} subscribers . {noOfVideo} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
