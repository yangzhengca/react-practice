import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './components/Fetch/Fetch.js'
import Form from './components/Form/Form.js';



function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Fetch />

    </>
  );
}

export default App;
