import React from 'react';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container px-2000"> 
        <a className="navbar-brand" href="/">Junior's place</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/html">HTML</a></li>
            <li className="nav-item"><a className="nav-link" href="/css">CSS</a></li>
            <li className="nav-item"><a className="nav-link" href="/js">JS</a></li>
            <li className="nav-item"><a className="nav-link" href="/nodejs">Node.js</a></li>
            <li className="nav-item"><a className="nav-link" href="/react">React</a></li>
            <li className="nav-item"><a className="nav-link" href="/explore">Explore</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
