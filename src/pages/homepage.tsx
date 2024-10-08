import './homepage.css';
import {Link} from "react-router-dom"
import { SEO } from '../components/SEO'

export function Homepage() {
    return (
        <>
            <head>
                <title>Ocean+ React</title>
                <SEO title='Ocean+ - Homepage'
                description='The place for Vyond movies!'
                name='Ocean+'
                type='article'
                image='../pictures/logo.jpg'/>
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
