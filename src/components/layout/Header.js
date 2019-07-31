import React from 'react';


function Header(count){
    return(
        <header style={headerStyle}>
            <h1>SCOTUS Game</h1>
            <h3>Of the 113 Supreme Court justices in US history, all but 6 have been white men. Can you tell these men apart?</h3>
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

export default Header;