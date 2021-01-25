import { ExpandMoreOutlined, History,
     Home, OndemandVideo, Subscriptions, 
     ThumbUpAltOutlined, VideoLibrary, WatchLater, 
     Whatshot } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow  title="Home" Icon={Home}/>
            <SidebarRow title="Trending" Icon={Whatshot}/>
            <SidebarRow title="Subscription" Icon={Subscriptions}/>
            <hr/>
            <SidebarRow selected title="Library" Icon={VideoLibrary}/>
            <SidebarRow title="History" Icon={History}/>
            <SidebarRow title="Your video" Icon={OndemandVideo}/>
            <SidebarRow title="watch later" Icon={WatchLater}/>
            <SidebarRow title="like video" Icon={ThumbUpAltOutlined}/>
            <SidebarRow title="show more" Icon={ExpandMoreOutlined}/>
            <hr/>
            
        </div>
    )
}

export default Sidebar
