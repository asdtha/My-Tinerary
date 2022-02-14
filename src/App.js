import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Cities from "./components/cities/Cities";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import axios from "axios";


function App() {
  axios.get("https://restcountries.com/v3.1/all")
  .then(response =>{
  var busquedaContinente=response.data.filter(continents=>continents.continents.includes("North America") )
  console.log(busquedaContinente)    
  })
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
