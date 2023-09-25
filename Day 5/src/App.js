import React, {useState} from "react";
import './App.css';
import Register from './components/Login&SignUp/Register'
import Donate from './components/Pages/Donate'
import Login from './components/Login&SignUp/Login';
import Home from './components/Pages/Home';
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
