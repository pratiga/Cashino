import React,{useState} from 'react'
 import Logo from '../imgs/logo.png'
import  './sidebar.css';
// import {UilSignOutAlt} from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
import { toggleMode } from '../App'

import {
  UilEstate,
  UilClipboardAlt,
  UilPackage,
  UilUsersAlt,
  UilChart,
 
  
} from "@iconscout/react-unicons";


const Sidebar = ({children}) => {
  // const { dispatch } = useContext(DarkModeContext);
    const [selected, setselected] = useState(0)
    const [mode, setMode] = useState('light');
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
const style = {
  textDecoration: 'none',
  textDecorationStyle: 'none',
  textDecorationLine: 'none',
  fontStyle: 'none',
};

return (
    <>  
    
   
    <div className={`Sidebar sidebar-${mode} bg-${mode}`}
    animate= {window.innerWidth<=768? `${expanded}`: ''}
     >
     <div className="sidebar-container">
    
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
        
          <NavLink  to={item.path} className={selected===index?'menuItem active': 'menuItem'}
          key={index}
          onClick={()=> setselected(index)}
           style={style}
          >
            <span><item.icon/></span>
            <div className='head'> {item.heading}</div>
          </NavLink>
        )
      )}
      {/* <div className='menuItem'>
        <UilSignOutAlt/>
      </div> */}
        <div className="bottom">
        Theme
        <div
          className="colorOption"
          onClick={() => setMode('light')}
        ></div>
        <div
          className="colorOption"
          onClick={() => setMode('dark')}
        ></div>
      </div>
      
      
      
    </div>
    </div>
    </div> 
    <main className={`main sidebar-${mode} bg-${mode}`}>
    {children}
    </main>
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