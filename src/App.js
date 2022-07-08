import React from 'react'
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar';
import  Dashboard  from './components/Dashboard/Dashboard.jsx';
import Agent from './components/Agent/Agent.jsx';
import  Customer  from './components/Customer/Customer.jsx';
import  Company  from './components/Company/Company.jsx';
import  Gametype  from './components/GameType/GameType.jsx';
import  CashTrans  from './components/CashTrans/CashTrans.jsx';
import  Playing  from './components/Playing/Playing.jsx';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Sidebar>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/agent" element={<Agent/>}/>
       <Route path="/customer" element={<Customer/>}/> 
      <Route path="/company" element={<Company/>}/>
      <Route path="/gametype" element={<Gametype/>}/>
      <Route path="/cashtrans" element={<CashTrans/>}/>
      <Route path="/playing" element={<Playing/>}/>
   </Routes>
      </Sidebar>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
