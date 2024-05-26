import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/navbar'element={<Navbar/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
