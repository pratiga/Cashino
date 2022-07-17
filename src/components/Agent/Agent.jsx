import React from 'react'
import { agentlist } from '../../Data/data'
import './Agent.css'
import AgentLists from './AgentLists'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const Agent = (props) => {
  return (
      <>
      <div className="agent-table">
    <div className='agent-title'>
    < SupportAgentIcon/> List of Agent
    </div>
    <button className='add'> AddNew</button>
    </div>
      <div className={`AgentLists agent-${props.mode} bg-${props.mode}`}>
    <div className={`agents agent-${props.mode} bg-${props.mode}`}>
        {agentlist.map((item,index)=> {
            return(
                <div className={`agent agent-${props.mode} bg-${props.mode}`}>
                    <img src={item.agent_pic} alt=""/>
                    <div className='not1'>
                       
                            <div className='id'>
                            <span>ID:</span>
                            <span>{item.agent_id}</span>
                            </div>
                           <div className='number'> 
                           {/* <span>Agent-no:</span> */}
                           <span>{item.agent_no}</span>
                           </div>
                           <div className='name'>
                           {/* <span>AgentName:</span> */}
                           <span>{item.agent_name}</span>
                           </div>
                            <div className='email'>
                            {/* <span>AgentEmail:</span> */}
                            <span>{item.Email}</span>
                            </div>
                            <div className='phone'>
                             <span>Phone:</span> 
                            <span>{item.phone}</span>
                            </div>
                            <div>
                            <span>{item.date}</span>
                        </div>
                        </div>
                    <div>
                        
                    </div>
               
            
            
        
    </div>
            )
    })}
        </div>
     <div className='list'>
     <AgentLists mode={props.mode} toggleMode={props.toggleMode}/>
     </div>
        </div>
        </>
        )}

export default Agent;