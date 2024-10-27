import {Link} from 'react-router-dom';

import './navbar.css'

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to="/">
                    <button className="button leading-loose">Home</button>
                </Link>
                <Link to="/Movies">
                    <button className="button leading-loose">Movies</button>
                </Link>
                <Link to="/Contact-Us">
                    <button className="button leading-loose">Contact Us</button>
                </Link>
            </div>
        </>
    )
}