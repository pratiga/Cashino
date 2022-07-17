import React from 'react'
import './footer.css'

const footer = (props) => {
  return (
     
    <div className={`footer footer-${props.mode} bg-${props.mode}`}>
    <div className='footer-content'>
    <p>copy right </p>
    </div>
</div>
  )
}

export default footer