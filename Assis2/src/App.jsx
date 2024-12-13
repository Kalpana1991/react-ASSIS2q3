import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    if (count) {
     setCount(0);
    }
   };


  return (
   
    <div className='count'>
    <div style={{  textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase} style={{ marginRight: '10px', padding: '10px 20px' }}>
        Increase
      </button>
      <button onClick={decrease} style={{  marginRight: '10px', padding: '10px 20px' }}>
        Decrease
      </button>
      <button onClick={reset} style={{ padding: '10px 20px' }}>
        reset
      </button>
      
    </div>
    </div>
  );

};
export default Counter;



