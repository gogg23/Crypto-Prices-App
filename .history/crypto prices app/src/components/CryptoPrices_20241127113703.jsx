import { useEffect, useState } from 'react';
import axios from 'axios';
export function CryptoPrices() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('api.coincap.io/v2/assets');
      console.log(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Crypto Prices</h2>
    </div>
  );
}
