import React from 'react';
import './Header.css';


function Header(){
    return(
        <nav className="header">
            <img className="header_logo" alt="logo" src="https://www.coronatracker.com/_nuxt/img/262cfac.png"></img>
            <h1>CoronaTracker</h1>
        </nav>
    )

}


export default Header;