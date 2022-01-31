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


import React, {useState} from 'react';
import axios from 'axios';

axios({
  method:'get',
  url: 'https://api.bithumb.com/public/ticker/ALL'
}).then(function (response) {
  console.log(response)
})

const App = ()=>{
  const [data, setData] = useState(null);
  const onClick = ()=>{
    axios.get('https://api.bithumb.com/public/ticker/ALL').then(reponse => {
      setData(reponse.data);
    });
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;