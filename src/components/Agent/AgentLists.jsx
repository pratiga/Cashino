import React from 'react'
import "./AgentList.css"
import { agentlist } from '../../Data/data'

const AgentLists = (props) => {
  return (
      
    <div className={`Updates update-${props.mode} bg-${props.mode}`}>
    
    {
        agentlist.map((agent,index)=> {
            return(
            <div className='agentlist'>
                <img src={agent.agent_pic} alt=""/>
                <div className='not1'>
                    <div style={{marginBottom:'0.5rem'}}>
                        <span>{agent.agent_name}</span>
                        <span>{agent.not1}</span>
                    </div>
                <div>
                    <div>
                        <span>{agent.date}</span>
                    </div>
                </div>
            </div>
            </div>
            )
    })
     }   
    
</div>

  )
}

export default AgentLists