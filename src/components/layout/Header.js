import React from 'react';
import { Link } from 'react-router-dom';



function Header(count){
    return(
        <header style={headerStyle}>
            <h1>Memory Game: Diversity Edition</h1>
            <h3>Try not to click the same photo twice!</h3>
            <Link style={linkStyle} to="/">SCOTUS  </Link> | <Link style={linkStyle} to="/FOX">  FOX</Link>

            <h3>Score:  {count.count} </h3>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}
const linkStyle={
    color: '#fff',
    textDecoration: 'none'
}

export default Header;