import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Logincontent from './Components/Logincontent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Logincontent/>}/>
      </Routes>
    </Router>
  )
}

