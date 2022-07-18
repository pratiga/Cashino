import React,{useState,useEffect} from "react";
import './GameType.css';
import axios from 'axios';

function GameType(props) {
  const [news, setNews] = useState([ ]) 
 
  
  useEffect(() => {
  axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
      console.log(res)
      setNews(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

   
  return (
    <>
    
    <div className="cont">
         <div className={`row table-${props.mode} bg-${props.mode}`}>
   
    {
    news.map((value) => {
      return (
        <>
         <div className={`article table-${props.mode} bg-${props.mode}`}> 
         <div className="art"> 
        <div class="cryptoid">
        <h1>{value.id}</h1>
        <img src={value.image} alt="" />  
        </div>
         <div class="box">
          <p>{value.symbol}</p>
        <p>{value.name}</p>
        <p> {value.current_price}</p>
         </div> 
         </div>    
        
       </div>
      
        </>
        
      )
    })
  }
  
  </div>
       
       </div>
    
    
    </>
  )}
export default GameType;
