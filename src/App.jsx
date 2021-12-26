import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Fetch from './components/Fetch/Fetch.js'
import Form from './components/Form/Form.js';
import SetData from './components/SetData/SetData.js'
import ComponentA from './components/ComponentA/ComponentA.js'
import Login from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard.js'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login />} />
        <Route path="/dashboard" element={ <Dashboard />} />

        {/* handle no match cases */}
        {/* <Route path="*" element={ <><h2>There is nothing here, please <a href="/login">Login</a></h2></> }/> */}

        {/* handle no match cases with Navigate(redirect)*/}
        <Route path="*" element={ <Navigate to="/login" /> }/>
      </Routes>
    </Router>
  );
}

export default App;
