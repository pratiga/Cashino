import {useState} from 'react'
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import  Dashboard  from './components/Dashboard/Dashboard.jsx';
import Agent from './components/Agent/Agent.jsx';
import  Customer  from './components/Customer/Customer.jsx';
import  Company  from './components/Company/Company.jsx';
import  Gametype  from './components/GameType/GameType.jsx';
import  CashTrans  from './components/CashTrans/CashTrans.jsx';
import  Playing  from './components/Playing/Playing.jsx';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark') 
    }
    
    else {
      setMode('light')
    }
  }
  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode} />
    <div className="App">
     
      <BrowserRouter>
      
      <Sidebar>
      <Routes>
      <Route path="/" element={<Dashboard mode={mode} toggleMode={toggleMode}/>}/>
      <Route path="/agent" element={<Agent mode={mode} toggleMode={toggleMode}/>}/>
       <Route path="/customer" element={<Customer mode={mode} toggleMode={toggleMode}/>}/> 
      <Route path="/company" element={<Company mode={mode} toggleMode={toggleMode}/>}/>
      <Route path="/gametype" element={<Gametype/>}/>
      <Route path="/cashtrans" element={<CashTrans/>}/>
      <Route path="/playing" element={<Playing/>}/>
   </Routes>
      </Sidebar>
      </BrowserRouter>
      </div>
      <Footer mode={mode} toggleMode={toggleMode}/>
      </>
    
  );
}

export default App;
