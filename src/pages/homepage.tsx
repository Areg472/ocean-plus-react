import './homepage.css';
import {Link} from "react-router-dom"

export function Homepage() {
    return (
        <>
            <head>
                <title>Ocean+ 0.1</title>
                <meta property="og:title" content="Ocean+ - Homepage"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://ocean-plus-react.pages.dev/"/>
                <meta property="og:image" content="../pictures/logo.jpg"/>
            </head>
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
