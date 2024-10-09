import './homepage.css';
import {Link} from "react-router-dom"
import {Helmet} from "react-helmet-async";


export function Homepage() {
    return (

        <>

            <body className="body">
            <Helmet>
                <meta property="og:url" content="reactus.oceanbluestream.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Ocean+ - Homepage"/>
                <meta property="og:description" content="The place for Vyond content"/>
            </Helmet>
            <div className="Headings">
                <h1 className="mb-4 leading-normal">Vyond movies and shows.</h1>
                <h2 className="mb-1.5 leading-normal">Anywhere, anytime, for free, no restrictions.</h2>
                <Link to="/Movies"><input className="oplusbuttons leading-loose mt-4" type="button" value="Access As Guest"/></Link>
            </div>
            </body>
        </>

    )
}
