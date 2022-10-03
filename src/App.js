import React, { useState } from 'react';
import './style.css';
import Counter from './Counter';

export default function App() {
  const [totalCounters, setTotalCounters] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [mapArray, setMapArray] = useState([]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        onChange={(e) => {
          setTotalCounters(e.target.value);
          let data = [];
          for (let i = 0; i < e.target.value; i++) {
            data.push(i);
          }
          setMapArray(data);
          setTotalClicks(0);
        }}
        placeholder="Enter Total Counter Components"
      />
      <div>Total Clicks : {totalClicks}</div>
      {mapArray.map((item) => (
        <Counter totalClicks={totalClicks} setTotalClicks={setTotalClicks} />
      ))}
    </div>
  );
}
