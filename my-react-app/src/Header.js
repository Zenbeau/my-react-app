import React from 'react';
import logo from './logo.png';
import Nav from './Nav'

function Header() {
    return (
      <header className="header">
        <img height={150} width={450} src={logo} alt="Little Lemon logo"/>
        <Nav/>
	    </header>
    );
  }

  export default Header;
