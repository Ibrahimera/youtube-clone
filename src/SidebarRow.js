import React from 'react'
import './SidebarRow.css'
function SidebarRow({selected,Icon,title}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
           <Icon className="sidebarRow__icon"/>
           <h3 className="sidebarRow__title">{title}</h3> 
           
        </div>
    )
}

export default SidebarRow
