import { Link } from "react-router-dom";

import "./navbar.css";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="image leading-loose">
            <img
              src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/a863e032ec9b272e293f8e4a779f49ce9f6feafa/src/pictures/oplus.svg"
              className="actualimage"
              alt="logo"
            />
          </div>
        </Link>
        <Link to="/Movies">
          <button className="button cursor-pointer leading-loose">
            Movies
          </button>
        </Link>
        <Link to="/Contact-Us">
          <button className="button cursor-pointer leading-loose">
            Contact Us
          </button>
        </Link>
        <Link to="/About-Us">
          <button className="button cursor-pointer leading-loose">
            About Us
          </button>
        </Link>
      </div>
    </>
  );
}
