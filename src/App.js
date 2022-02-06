import React from "react"
import { useState, useEffect } from "react";
import title_logo from "./img/React.png"
import "./App.css"
import axios from "axios";

function App() {
  axios({
    method:'get',
    url: "https://api.coinpaprika.com/v1/tickers"
  }).then(function (response) {
    console.log(response)
  })

  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then ((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoading(false)
    })
  }, [])


  return (
    <>
      <div className="header">
        <img className="title" alt="title" src={title_logo} />
        <h1 className="comment">React Coin {loading ? "" : `(${coins.length})`}</h1>
      </div>
      <div>  
        {loading ? (
          <p className="loading_comment">Loading...</p>
          ) : (
          <>
            <select>
                {coins.map((coin) => (
                  <option>
                    {coin.name} ({coin.symbol})
                  </option>
                ))}
            </select>
            {/* beta_value, circulating_supply, first_data_at, id, last_updated, max_supply, name, rank, symbol, total_supply */}
            <ul className="coin_list">
              {coins.map((coins) => 
                <>
                  <li>name: {coins.name}</li>
                  <li>id: {coins.id}</li>
                  <li>symbol: {coins.symbol}</li>
                  <li>rank: {coins.rank}</li>
                  <li>beta_value: {coins.beta_value}</li>
                  <li>circulating_supply: {coins.circulating_supply}</li>
                  <li>first_data_at: {coins.first_data_at}</li>
                  <li>last_updated: {coins.last_updated}</li>
                  <li>max_supply: {coins.max_supply}</li>
                  <li>total_supply: {coins.total_supply}</li>
                </>
              )}
            </ul>
          </>
        )}
      </div>
    </>  
  )
}


export default App;
