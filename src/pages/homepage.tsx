import './homepage.css';
import {Link} from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async';

export function Homepage() {
    return (
        <>
            <HelmetProvider>
                <title>Ocean+ - Homepage</title>
                <meta name="description" content="The place for Vyond movies!"/>
                <meta property="og:title" content="Ocean+ - Homepage"/>
                <meta property="og:description" content="The place for Vyond movies!"/>
                <meta property="og:image" content="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"/>
            </HelmetProvider>
            <body className="body">
            <div className="Headings">
                <h1 className="mb-4 leading-normal">Vyond movies and shows.</h1>
                <h2 className="mb-1.5 leading-normal">Anywhere, anytime, for free, no restrictions.</h2>
                <Link to="/Movies"><input className="oplusbuttons leading-loose mt-4" type="button" value="Access As Guest"/></Link>
            </div>
            </body>
        </>

    )
}
