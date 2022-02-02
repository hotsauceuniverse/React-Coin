// import { useRef, useState, useEffect } from "react";
// import React, {} from 'react';
// import axios from 'axios';

// axios({
//   method:'get',
//   url: 'https://api.bithumb.com/public/ticker/ALL'
// }).then(function (response) {
//   console.log(response)
// })


// export default function CoinList({data}) {
//   const inputRef = useRef()

//   const [coin, setCoin] = useState([])

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={click}>검색</button>
//       <ul>
//       {coin.map(coin => <li key={coin.data}>{coin.data}</li>)}
//       </ul>
//     </div>
//   )

//   function click() {
//     CoinList(inputRef.current.value)
//   }
// }

// --------------------------------------------------------------
// import React, {useState} from "react"
// import axios from "axios"

// axios({
//     method:'get',
//     url: 'https://api.bithumb.com/public/ticker/ALL'
//   }).then(function (response) {
//     console.log(response)
//   })
  

// const App = () => {
//   const [data, setData] = useState(null)
//   const onClick = async() => {
//     try{
//       const response = await axios.get("https://api.bithumb.com/public/ticker/ALL")
//       setData(response.data)
//     } catch(e) {
//       console.log(e)
//     }
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//     </div>
//   )
// }

// export default App
// --------------------------------------------------------------
// import { useState, useEffect } from "react"

// function Body() {
//   const [loading, setLoading] = useState(true)
//   const [coins, setCoins] = useState([])
//   useEffect(() => {
//     fetch("https://api.bithumb.com/public/ticker/ALL")
//     .then (response => response.json())
//     .then((json) => setCoins(json))
//     setLoading(false)
//   },[])
//   return (
//     <div>
//       {loading ? <p>Loading...</p> : null}
//     </div>
//   )
// }

// export default Body




