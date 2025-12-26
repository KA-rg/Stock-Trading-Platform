import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="/">Stock Trading Platform</a>
      </div>
      <ul className="nav-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;