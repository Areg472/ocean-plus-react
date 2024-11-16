import {Link} from 'react-router-dom';

import './navbar.css'

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/">
                    <div className="leading-loose image">
                        <img src="/src/pictures/oplus.svg" className="actualimage" alt="logo"/>
                    </div>
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