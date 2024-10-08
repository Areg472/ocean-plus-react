import './homepage.css';
import {Link} from "react-router-dom"
import { SEO } from '../components/SEO'


export function Homepage() {
    return (

        <>
            <SEO title='Ocean+'
                 description='The place for Vyond movies!'
                 name='Ocean+'
                 type='article'
                 twittercard='summary_large_image'
                 image={'https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg'}/>
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
