import React from 'react';
import './NavbarMini.css'
function NavbarMini() {
  const openNav = () =>  {
    document.getElementById("mySidepanel").style.width = "109px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <div>
      <div id="mySidepanel" class="sidepanel">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <a href="/"><p className="innerText">Home</p></a>
        <a href="/html"><p className="innerText">HTML</p></a>
        <a href="/css"><p className="innerText">CSS</p></a>
        <a href="/js"><p className="innerText">JS</p></a>
        <a href="/nodejs"><p className="innerText">Node.js</p></a>
        <a href="/react"><p  className="innerText">React</p></a>
        <a href="/explore"><p className="innerText">Explore</p></a>
        <a href="/about"><p className="innerText">About</p></a>
      </div>
      <button class="openbtn" onClick={openNav}>&#9776; <p className='textside'>Junior's place</p></button>
    </div>
  );
}

export default NavbarMini;
