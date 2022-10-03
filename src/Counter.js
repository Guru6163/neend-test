import React, { useState } from 'react';

const Counter = ({ totalClicks, setTotalClicks }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          setTotalClicks(totalClicks + 1);
        }}
      >
        Button: {count}
      </button>
    </div>
  );
};

export default Counter;
