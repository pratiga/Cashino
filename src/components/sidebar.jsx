import React,{useState} from 'react'
 import Logo from '../imgs/logo.png'
import  './sidebar.css';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
// import {FaBars} from 'react-icons/fa'

import {
  UilEstate,
  UilClipboardAlt,
  UilPackage,
  UilUsersAlt,
  UilChart,
 
  
} from "@iconscout/react-unicons";


const Sidebar = ({children}) => {
    const [selected, setselected] = useState(0)
    const [expanded, setExpanded] = useState(true);


 const menuItem = [
  {
      path:"/",
      icon: UilEstate,
      heading: "Dashboard",
  },
  {
      path:"/agent",
      icon:UilClipboardAlt,
      heading:"Agent",
  },
  {
      path:"/customer",
      icon:UilUsersAlt,
      heading:"Customers",
  },
  {
      path:"/company",
      icon:UilPackage,
      heading:"Company",
  },
  {
      path:"/gametype",
      icon:UilPackage,
      heading:"GamesType",
  },
  {
      path:"/cashtrans",
      icon: UilChart,
      heading: 'CashTrans'
  },
  {
      path:"/playing",
      icon: UilChart,
      heading: 'Playing'
  },
  
  
];


return (
    <>
    <div className="Sidebar"
    animate= {window.innerWidth<=768? `${expanded}`: ''}
     >
     <div className="container">
    
    {/* logo */}
    
        <div className="logo">
        <img src={Logo} alt=""/>
        <span>
            Ca<span>s</span>hino
        </span>
        </div>
   
    
    {/* // menu */}
    <div className='menu'>
      {
          menuItem.map((item, index)=> (
        
          <NavLink to={item.path} className={selected===index?'menuItem active': 'menuItem'}
          key={index}
          onClick={()=> setselected(index)}
          >
            <span><item.icon/></span>
            <span> {item.heading}</span>
          </NavLink>
        )
      )}
      <div className='menuItem'>
        <UilSignOutAlt/>
      </div>
    </div>
    </div>
    </div> 
    <main>{children}</main>
    </>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// //   <div className='container'>
// //   <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
// //   <div className='top_section'>
// //       <h1 style={{display: isOpen ? "block": "none"}} className='logo'> Logo </h1>
// //       <div style={{marginLeft: isOpen ? "50px": "0px"}}className='bars'>
// //       <UilEstate onClick={toggle} />
// //       </div>
// //   </div>
// //   {
// //       menuItem.map((item, index) => (
          
// //           <NavLink to={item.path} 
// //            key={index}
// //            className="link" 
// //            activeclassName="active"
// //            >
// //               <div className='icon'>{item.icon}</div>
// //               <div style={{display:isOpen ? "block": "none"}} className='link_text'> {item.heading}</div>
// //           </NavLink>
         
// //       ))
// //   }
// //   </div>
// //   <main>{children}</main>
// //   </div>
 )
}


export default Sidebar