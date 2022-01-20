import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Cities from "./components/cities/Cities";
import Navbar from "./components/navbar/Navbar";
import Users from "./components/navbar/Users";
import Footer from "./components/footer/Footer";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
