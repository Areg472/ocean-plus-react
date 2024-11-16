import {Link} from 'react-router-dom';

import './navbar.css'

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/">

                        <img src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logoresizedu.jpg" className="leading-loose image" alt="logo"/>
                </Link>
                <Link to="/Movies">
                    <button className="button leading-loose">Movies</button>
                </Link>
                <Link to="/Contact-Us">
                    <button className="button leading-loose">Contact Us</button>
                </Link>
                <Link to="/About-Us">
                    <button className="button leading-loose">About Us</button>
                </Link>
            </div>
        </>
    )
}