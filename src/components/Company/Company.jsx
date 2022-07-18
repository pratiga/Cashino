import React from "react";
import './Company.css';
import { companytype } from "../../Data/company"
import { Icon } from '@iconify/react';
function Company(props) {

  return (
   
    <div className="company">
    {
      companytype.map((item,index)=> {
        return(
          <>
          <div className={`company-container agent-${props.mode} bg-${props.mode}`}>
        <div className="company-article">
          <div className="title">{item.title}</div>
          <div className="content">
            <div className="industry"><span>Industry</span> <span>: {item.industry}</span></div>
            <div className="employees"><span>Number of employees</span>  <span> :{item.Numberofemployees}</span></div>
            <div className="location"><span>Location</span> <span>: {item.Location}</span></div>
          </div>
          <div className="details">{item.details}</div>
          </div>
        <div className="company-bottom">
       
        <Icon icon="typcn:user"width="100" height="100" />
        <h4> View Top Management Contacts</h4>
        </div>
        </div>
        </> 
      )})
    }
    
    </div>
    
      
        
      
   
    
    
  )}
export default Company
