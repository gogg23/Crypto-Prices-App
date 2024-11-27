import { useEffect, useState } from 'react';
import axios from 'axios';
export function CryptoPrices() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    axios.get('api.coincap.io/v2/assets');
  }, []);
  return (
    <div>
      <h2>Crypto Prices</h2>
    </div>
  );
}
