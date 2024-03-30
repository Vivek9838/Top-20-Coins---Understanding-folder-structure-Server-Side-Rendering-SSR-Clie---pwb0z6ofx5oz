import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);
  async function getData(){
    const res=await fetch("https://api.coinlore.net/api/tickers/");
    const datacoin=await res.json();
    const top=datacoin.data.slice(0,20);

    setCoins(top[0]);
  }
  useEffect(()=>{
getData();
  })

  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins.map((id,name,symbol,rank,price_usd) => (
          <CoinCard 
           key={id}   
          id={id}
             name={name}
              symbol={symbol}
              rank={rank}
              price_usd={price_usd}/>
        ))}
      </div>
    </div>
  );
}

export default CoinDisplay;
