import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className="Header">
            <Link to="/">
                <img className="best-buy-logo" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg" alt="logo" />
            </Link>
        </div>
    )
}

export default Header;