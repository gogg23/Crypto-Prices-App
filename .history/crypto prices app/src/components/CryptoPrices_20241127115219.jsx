import { useEffect, useState } from 'react';
import axios from 'axios';
export function CryptoPrices() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
      const result = await axios('https://api.coincap.io/v2/assets');
      console.log(result);
      setCryptos(result.data.data);}
      catch console.(error){
        console.error(error)
      };
      
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Crypto Prices</h2>
    </div>
  );
}
