import React from "react";
import Home from "./pages/Home"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login'


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
