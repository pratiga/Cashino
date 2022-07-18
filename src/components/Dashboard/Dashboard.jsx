
import { Card } from '@mui/material'
import React from 'react'
import Cards from '../../pages/Cards/cards'
 import Chart from '../../pages/Chart/chart'
import Featured from '../../pages/featured/featured'
 import Widget from '../../pages/widget/widget'
 import DashboardIcon from '@mui/icons-material/Dashboard';
import './Dashboard.css'

const Dashboard = (props) => {
  return (
    <>
    <div className={`dashboard dashboard-${props.mode} bg-${props.mode}`}>
    <div className='heading'>
      <DashboardIcon/>Dashboard
    </div>
     <div className='widget'>
     <Cards type="user"/>
     <Cards type="order"/>
     <Cards type="earning"/>
     <Cards type="balance" />
     </div> 
    
     <div className='feature'>
      <div><Featured/></div>
      <div><Widget/></div> 
    </div>
    <div className='chart'>
    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
    </div> 
      
   
    </div>
    </>
  )
}

export default Dashboard