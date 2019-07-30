import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/testing-react-router">Testing React Router</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
    )
}

export default Navigation;