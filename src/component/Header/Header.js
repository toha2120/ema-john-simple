import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='ul'>
                <a href="/shop"> shop</a>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;