import React from 'react';
import logo from '../image/logo.svg';

function Navbar() {
    return(
        
<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand nav-link text-white ml-5" href="#">
      <img src= {logo} alt="logo" style={{width: '35px'}}/>
       <i className="title" style ={{fontSize: '22px'}}> Bangla_G</i>
    </a>
  </div>
</nav>
    );
}

export default Navbar;
