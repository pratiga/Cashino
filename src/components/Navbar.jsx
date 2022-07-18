import React from 'react'
import './navbar.css'
// import PropTypes from 'prop-types'
// import { comments } from '@iconscout/react-unicons';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CommentIcon from '@mui/icons-material/Comment';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness2Icon from '@mui/icons-material/Brightness2';
const navbar = (props) => {

  return (
     
    <nav>
        <div className={`navbar-container navbar-${props.mode} bg-${props.mode}`}>
        <span><CommentIcon /></span>
        <span><FileDownloadIcon /></span>
        <span><DynamicFeedIcon /></span>
        <span><AddIcCallIcon /></span>
        <span><CircleNotificationsIcon /></span>
         <span><Brightness5Icon/></span>
        <label className='switch'>
        <input type ="checkbox"  onClick={props.toggleMode}/>
        <span className="slider" />
        </label>
        <span><Brightness2Icon/></span>
       
        </div>
    </nav>
    
    
  )
}

export default navbar