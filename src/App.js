import { useState, useEffect } from "react";
import title_logo from "./img/React.png"
import "./App.css"
import axios from "axios";


function App() {
  axios({
    method:'get',
    url: 'https://api.bithumb.com/public/ticker/ALL'
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
          <p>Loading...</p>
          ) : (
          <select>
            {coins.map((coin) => ( 
              <option>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
    </>  
  )
}

export default App;
