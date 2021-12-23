import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <p>{ count }</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </>
    );
}

export default Counter
