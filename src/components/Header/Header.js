import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#call">Call Now</a>
            </nav>
        </div>
    );
};

export default Header;