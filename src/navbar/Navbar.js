import React from "react";
import "./Navbar.css";
const Navbar = () => {
   return (
      <nav className="navigation navbar navbar-dark justify-content-between">
         <a href="/" className="navbar-brand mx-3">
            Productivity Timer
         </a>
         <div className="user text-end float-right mx-3 mt-1">
            <i
               className="fas fa-user-circle fa-3x"
               style={{ color: "white" }}
            ></i>
         </div>
      </nav>
   );
};

export default Navbar;
