import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import React from "react";
import Home from './pages/Homescreen';
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/aboutus'element={<AboutUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
