import './App.css';
import Login from './Login';
import Register from './Register';
import Donate from './Donate';
import Home from './Home';
import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" exact element={<Login/>}></Route>          
      <Route path="/register" element={<Register/>}></Route>          
      <Route path="/home" element={<Home/>}></Route>          
      <Route path="/donate" element={<Donate/>}></Route>          
     </Routes>

    </Router>
  );
}

export default App;
