import { useEffect, useState } from 'react';
import axios from 'axios';
export function CryptoPrices() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://api.coincap.io/v2/assets');
        console.log(result);
        setCryptos(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Crypto Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price USD</th>
            <th>Change 24H</th>
          </tr>
        </thead>
        <tb>
          {cryptos.map((crypto) => (
            <tr>
              <td>{crypto.rank}</td>
            </tr>
          ))}
        </tb>
      </table>
    </div>
  );
}
