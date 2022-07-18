import React from 'react'
import  {Customerlist} from "../../Data/customer"
import PeopleIcon from '@mui/icons-material/People';
import "./Customer.css"
const Customer = (props) => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <>
    <div className={`customer table-${props.mode} bg-${props.mode}`}>
    <div className='customer-title'>
    < PeopleIcon/>Customers
    </div>
    <button className='add'> AddNew</button>
    </div>
    <table className={`widgetLgTable table-${props.mode} bg-${props.mode}`}>
    
        <tr className="widgetLgTr">
        <th className="widgetLgTh">ID</th>
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh"></th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Phone</th>
          <th className="widgetLgTh">Full Address</th>
          <th className="widgetLgTh">Time on App</th>
          <th className="widgetLgTh">Edit</th>
          <th className="widgetLgTh">Delete</th>
        </tr>
        {
        Customerlist.map((item, index)=> (
        <tr className="widgetLgTr">
          <td className="widgetLgId">{item.customer_id}</td>
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{item.agent_name}</span>
          </td>
          <td className="widgetLgDate">{item.agent_no}</td>
          <td className="widgetLgDate">{item.Email}</td>
          <td className="widgetLgDate">{item.date}</td>
          <td className="widgetLgAmount">{item.amount}</td>
          <td className="widgetLgAmount">{item.phone}</td>
          <td className="widgetLgAmount">{item.fullAddress}</td>
          <td className="widgetLgAmount">{item.TimeonApp}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        )
        )}
      
      </table>
      </>
  )
}

export default Customer