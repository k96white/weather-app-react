import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const style = {
    color: "white",
  };
  return (
    <div>
      <header className="nav-bar">
        <h1 id="app-header">My Weather Application</h1>
        <ul className="nav-items">
          <Link to="/" style={style}>
            <li>Home</li>
          </Link>
          <Link to="/MyCities" style={style}>
            <li>My-Cities</li>
          </Link>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
