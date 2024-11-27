import { useEffect, useState } from 'react';
import axios from 'axios';
export function CryptoPrices() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = axios.get('api.coincap.io/v2/assets');
    };
  }, []);
  return (
    <div>
      <h2>Crypto Prices</h2>
    </div>
  );
}
