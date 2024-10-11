import React from "react";
import logo from "../assets/logo.png"

export default function NavBar() {
     return (
          <nav>
               <img src={logo} alt="Arriba Stocks Logo" className="logo" />
               <h1><span className="first-letter">A</span>rriba<span className="first-letter">S</span>tocks</h1>
          </nav>
     )
}