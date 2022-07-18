import React from 'react'
import "./CashTrans.css"
import {transition} from "../../Data/transition"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TransformIcon from '@mui/icons-material/Transform';
import { Icon } from '@iconify/react';
const CashTrans = (props) => {
  return (
    <>
    <div className={`transition cash-${props.mode} bg-${props.mode}`}>
    <table className='trans-table'>
       <tr>
          <th className='Account'><Icon icon="bxs:user-account" />Account No</th>
          <th className='date'><CalendarMonthIcon/>Date</th>
          <th className='transation'><TransformIcon/>Transation Details</th>
          <th className='cheque'><Icon icon="cib:cashapp" />Cheque No</th>
          <th className='value'><Icon icon="bi:clipboard-data" />Value Data</th>
          <th className='withdraw'><Icon icon="noto-v1:atm-sign" />WithdrawATM</th>
          <th className='deposite'><AccountBalanceIcon/>DepositeATM</th>
          <th className='balance'><AccountBoxIcon/>BalanceATM</th>
       </tr>
      
    {
      transition.map((item,index)=>(
      
       <tr>
          <td className='Account'>{item.accountNo}</td>
          <td className='date'>{item.date}</td>
          <td className='transation'>{item.transationDetails}</td>
          <td className='cheque'>{item.chequeNo}</td>
          <td className='value'>{item.valueDate}</td>
          <td className='withdraw'>{item.withdrawAtm}</td>
          <td className='deposite'>{item.balanceAtm}</td>
          <td className='balance'>{item.depositeAtm}</td>
       </tr> 
       ) 
      )
      
      
    }
    </table>
    </div>
    </>
  )
}

export default CashTrans