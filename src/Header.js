import { Avatar } from '@material-ui/core'
import {Menu, Apps, Notifications, Search, VideoCall } from '@material-ui/icons'
import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
    const [term, setTerm] = useState('')
    return (
        <div className="header">
            <div className="header__left">
               <Menu/>
            <Link to="/"><img className="header__logo" src="/image/logo.jpg" alt=""/> </Link>
            </div>

            <div className="header__input">
               <input type="text" value={term} placeholder="Search"
                onChange={e=>setTerm(e.target.value)}/>
                <Link to={`/search/${term}`}>
               <Search className="header__searchInput"/>
               </Link>
            </div>
            <div className="header__right">
               <VideoCall className="header__icons"/>
               <Apps className="header__icons"/>
               <Notifications className="header__icons"/>
               <Avatar className="header__avatar" alt="ibrahim" src="/image/ibrahim.jpg" />
            </div>

            
        </div>
    )
}

export default Header
